"use client";

import { useState } from "react";
import styles from "./shop.module.css";
import { products } from "@/data/merch";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

export default function ShopPage() {
    const { addToCart } = useCart();
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Coffee Beans", "Equipment", "Merch"];
    const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className="animate-fade-up">The Roastery</h1>
                    <p className="animate-fade-up">Bring the artisanal taste of Café Delight to your home.</p>
                </div>
            </header>

            <section className={styles.container}>
                <div className={styles.filters}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className={`${styles.card} hover-lift`}>
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} className={styles.image} />
                                <span className={styles.tag}>{product.category}</span>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.headerRow}>
                                    <h3 className={styles.name}>{product.name}</h3>
                                    <span className={styles.price}>₹{product.price}</span>
                                </div>
                                <p className={styles.weight}>{product.weight}</p>
                                <p className={styles.desc}>{product.desc}</p>
                                <button className={styles.addBtn} onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
