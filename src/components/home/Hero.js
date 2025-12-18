import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <img src="/images/hero.png" alt="Bangalore Cafe" className={styles.bg} />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>The Soul of Bangalore in Every Sip</h1>
                <p className={styles.subtitle}>
                    Premium filter coffee, artisanal eats, and that perfect Koramangala vibe.
                </p>
                <div className={styles.actions}>
                    <Button href="/menu" variant="primary">
                        Order Now
                    </Button>
                    <Button href="/reservations" variant="secondary">
                        Book a Table
                    </Button>
                </div>
            </div>
        </section>
    );
}
