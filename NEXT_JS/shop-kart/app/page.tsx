
import ProductList from "./components/ProductList";
import styles from "./page.module.css";

export default function Home() {
  return (
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

      <ProductList />
    </main>
  );
}
