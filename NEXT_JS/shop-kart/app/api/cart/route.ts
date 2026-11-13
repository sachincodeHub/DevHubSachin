import connectDB from "@/lib/db";
import Cart from "@/models/cart";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const sessionId = request.cookies.get("cartSessionId")?.value;

    if (!sessionId) {
      return NextResponse.json([]);
    }

    const cartItems = await Cart.find({ sessionId }).populate("productId");

    return NextResponse.json(cartItems);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch cart" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { productId } = await request.json();

    let sessionId = request.cookies.get("cartSessionId")?.value;

    if (!sessionId) {
      sessionId = crypto.randomUUID();
    }

    const cartItem = await Cart.findOneAndUpdate(
      { sessionId, productId },
      { $inc: { quantity: 1 } },
      { new: true, upsert: true }
    );

    const response = NextResponse.json(cartItem);

    response.cookies.set("cartSessionId", sessionId, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await connectDB();

    const sessionId = request.cookies.get("cartSessionId")?.value;
    const { productId, change } = await request.json();

    if (!sessionId || !productId || ![1, -1].includes(change)) {
      return NextResponse.json(
        { message: "Invalid request" },
        { status: 400 }
      );
    }

    const item = await Cart.findOne({ sessionId, productId });

    if (!item) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    item.quantity = Math.max(1, item.quantity + change);
    await item.save();

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update quantity" },
      { status: 500 }
    );
  }
}