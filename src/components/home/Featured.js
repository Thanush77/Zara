import styles from "./Featured.module.css";
import Image from "next/image";

export default function Featured() {
    const items = [
        {
            title: "Filter Kaapi",
            price: "₹40",
            desc: "Our signature blend, brewed traditional style.",
            image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf"
        },
        {
            title: "Bun Maska",
            price: "₹60",
            desc: "The perfect companion for your coffee.",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
        },
        {
            title: "Chilli Cheese Toast",
            price: "₹180",
            desc: "Spicy, cheesy, and absolutely addictive.",
            image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929"
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Namma Favorites</h2>
                <div className={styles.grid}>
                    {items.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemDesc}>{item.desc}</p>
                            <span className={styles.price}>{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
