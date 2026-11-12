
"use client";

import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  
return (
 <section id="products" className={styles.productsSection}>
    <h2>Our Latest Products</h2>

    <div className={styles.productsGrid}>
      {products.map((product) => (
        <div className={styles.productCard} key={product._id}>
          <h3>{product.name}</h3>

          <img
            className={styles.productImage}
            src={
              product.images?.[0] ||
              "https://placehold.co/400x300?text=No+Image"
            }
            alt={product.name}
          />

          <p className={styles.productPrice}>
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className={styles.productDescription}>
            {product.description}
          </p>

          <p>Brand: {product.brand}</p>
          <p>Stock: {product.stock}</p>

          <button
            className={styles.addToCartButton}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </section>
);

}
