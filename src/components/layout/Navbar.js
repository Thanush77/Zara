"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();
    const { user } = useAuth();

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Café Delight
                </Link>
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={styles.hamburger}></span>
                </button>
                <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
                    <li>
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
                    </li>
                    <li>
                        <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
                    </li>
                    <li>
                        <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li>
                        <button className={styles.cartBtn} onClick={() => { }}>
                            Cart ({cartCount})
                        </button>
                    </li>
                    <li>
                        {user ? (
                            <Link href="/profile" className={styles.profileLink} onClick={() => setIsOpen(false)}>
                                👤 {user.name.split(" ")[0]}
                            </Link>
                        ) : (
                            <Link href="/login" className={styles.loginBtn} onClick={() => setIsOpen(false)}>Login</Link>
                        )}
                    </li>
                    <li>
                        <Link href="/menu" className={styles.ctaButton} onClick={() => setIsOpen(false)}>
                            Order Now
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
