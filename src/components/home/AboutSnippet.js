import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./AboutSnippet.module.css";

export default function AboutSnippet() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h2 className={styles.heading}>Brewing Since 2015</h2>
                    <p className={styles.text}>
                        Nestled in the heart of Koramangala, Café Delight started as a small passion project. Today, we are proud to serve the city's finest artisan roasts and locally sourced bites.
                    </p>
                    <p className={styles.text}>
                        Whether you're catching up with friends or working on your next big startup idea, our doors are always open.
                    </p>
                    <Button href="/about" variant="outline">Read Our Story</Button>
                </div>
                <div className={styles.imageColumn}>
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop"
                        alt="Cafe Interior"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
