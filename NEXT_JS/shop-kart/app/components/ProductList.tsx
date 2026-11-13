
"use client";

import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

type ProductListProps = {
  search: string;
  addToCart: (product: any) => void;
};

export default function ProductList({
  search,
  addToCart,
}: ProductListProps) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  // Filter products
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.brand}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section id="products" className={styles.productsSection}>
      <h2>Our Latest Products</h2>

      <div className={styles.productsGrid}>
        {filteredProducts.length === 0 && (
          <p>No products found.</p>
        )}

        {filteredProducts.map((product) => (
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
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
