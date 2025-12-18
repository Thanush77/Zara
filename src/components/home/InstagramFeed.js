import styles from "./InstagramFeed.module.css";

export default function InstagramFeed() {
    const images = [
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2574&auto=format&fit=crop", // Latte Art
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2526&auto=format&fit=crop", // Croissant
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2671&auto=format&fit=crop", // Cafe Vibe
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop"  // Barista
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Scenes from the Café</h2>
                <p className={styles.subtitle}>Follow us @cafedelight_blr</p>
                <div className={styles.grid}>
                    {images.map((img, idx) => (
                        <div key={idx} className={styles.square}>
                            <img src={img} alt="Insta Post" className={styles.image} />
                            <div className={styles.overlay}>
                                <span>❤️ {150 + idx * 12}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
