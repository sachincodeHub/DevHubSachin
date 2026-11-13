
"use client";
import { useCart } from "./context/cartContext";
import ProductList from "./components/ProductList";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { useState,useEffect, } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
const { cartCount, refreshCartCount } = useCart();
  useEffect(() => {
  async function fetchCart() {
    const response = await fetch("/api/cart");
    const data = await response.json();

    const totalItems = data.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    );
refreshCartCount()
  }

  fetchCart();
}, []);

  const addToCart = async (product: any) => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const data = await response.json();
console.log(data);
await refreshCartCount();
    } catch (error) {
      console.log("Add to cart error:", error);
    }
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
      />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.tagline}>
              YOUR ONE-STOP SHOPPING DESTINATION
            </span>

            <h1>
              Discover Products
              <br />
              You'll Love
            </h1>

            <p>
              Explore a wide range of quality products at great prices.
              Find everything you need, all in one place.
            </p>

            <a href="#products" className={styles.heroButton}>
              Explore Products →
            </a>
          </div>
        </section>

        <ProductList
          search={search}
          addToCart={addToCart}
        />
      </main>
    </>
  );
}
