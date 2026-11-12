import styles from "./Navbar.module.css";

export default function Navbar() {
   
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
              <div className={styles.logo}>ShopKart</div>
             <div className={styles.searchBar}>
               <input className={styles.searchInput} type="text" placeholder="Search products..." />
  <button className={styles.searchButton} type="button">
  Search
</button>
              </div>
              <div className={styles.cart}>
  Cart (0)
</div>
      </nav>
    </header>
  );
}