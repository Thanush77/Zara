import styles from "./Testimonials.module.css";

export default function Testimonials() {
    const reviews = [
        { name: "Aditi Rao", text: "Finally, a place in Indiranagar that serves authentic Filter Coffee without the fuss. Love the vibe!", rating: 5 },
        { name: "Rahul K.", text: "The workspace is amazing. Fast WiFi and the Chilli Cheese Toast keeps me going for hours.", rating: 5 },
        { name: "Priya Menon", text: "Great place for a Sunday brunch. The pancakes are fluffy and the staff is super friendly.", rating: 4 },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Bengaluru Loves Us</h2>
                <div className={styles.grid}>
                    {reviews.map((review, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.stars}>{"★".repeat(review.rating)}</div>
                            <p className={styles.text}>"{review.text}"</p>
                            <p className={styles.name}>- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
