"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
type NavbarProps = {
  search: string;
  setSearch: (value: string) => void;
  cartCount: number;
};
export default function Navbar({
  search,
  setSearch,
   cartCount,
}: NavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
              <div className={styles.logo}>ShopKart</div>
             <div className={styles.searchBar}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className={styles.searchInput} type="text" placeholder="Search products..." />
  <button className={styles.searchButton} type="button">
  Search
</button>
              </div>
              <Link href="/cart" className={styles.cart}>
  Cart ({cartCount})
</Link>
      </nav>
    </header>
  );
}