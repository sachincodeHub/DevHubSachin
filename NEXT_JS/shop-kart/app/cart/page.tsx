
"use client";

import { useCart } from "../context/cartContext";
import { useEffect, useState } from "react";
import styles from "./cart.module.css";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { refreshCartCount } = useCart();

  const fetchCart = async () => {
    try {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log("Cart error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (
    productId: string,
    change: number
  ) => {
    try {
      const response = await fetch("/api/cart", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, change }),
      });

      if (!response.ok) {
        throw new Error("Failed to update quantity");
      }

      await fetchCart();
      await refreshCartCount();
    } catch (error) {
      console.log("Quantity update error:", error);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.productId.price * item.quantity,
    0
  );

  if (loading) {
    return <h2 className={styles.loading}>Loading Cart...</h2>;
  }

  return (
    <main className={styles.cartPage}>
      <h1 className={styles.heading}>My Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <h2>Your cart is empty!</h2>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div className={styles.cartItem} key={item._id}>
                <img
                  className={styles.productImage}
                  src={
                    item.productId.images?.[0] ||
                    "https://placehold.co/100"
                  }
                  alt={item.productId.name}
                />

                <div className={styles.productDetails}>
                  <h3 className={styles.productName}>
                    {item.productId.name}
                  </h3>

                  <p className={styles.productPrice}>
                    ₹{item.productId.price.toLocaleString("en-IN")}
                  </p>

                  <div className={styles.quantityControls}>
                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.productId._id, -1)
                      }
                    >
                      -
                    </button>

                    <span className={styles.quantity}>
                      {item.quantity}
                    </span>

                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.productId._id, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className={styles.summary}>
            <h2>Order Summary</h2>

            <div className={styles.total}>
              <span>Total Amount</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
