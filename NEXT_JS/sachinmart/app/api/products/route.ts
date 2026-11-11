
import connectDB from "@/lib/db";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        console.log("POST API HIT");

        await connectDB();

        const body = await request.json();

        const product = await Product.create(body);

        return NextResponse.json(
            {
                message: "Product created successfully",
                product
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Product creation failed:", error);

        return NextResponse.json(
            {
                message: error instanceof Error
                    ? error.message
                    : String(error)
            },
            { status: 500 }
        );
    }
}
