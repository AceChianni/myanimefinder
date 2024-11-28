"use client";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // Import the CSS Module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <Link href="/" className={styles.navbarItem}>
          Home
        </Link>
        <Link href="/about" className={styles.navbarItem}>
          About
        </Link>
        <Link href="/quiz" className={styles.navbarItem}>
          Quiz
        </Link>
        <Link href="/anime" className={styles.navbarItem}>
          Top Anime
        </Link>
        <Link href="/contact" className={styles.navbarItem}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
