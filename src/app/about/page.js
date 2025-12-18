import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Our Story</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.lead}>
                        Started in 2015, Café Delight was born from a simple passion: to serve the perfect cup of coffee in a place that feels like home.
                    </p>
                    <p>
                        We believe in sustainability, community, and quality. Our beans are ethically sourced directly from farmers, and our food is prepared fresh daily using local ingredients.
                        Whether you're here for a quick espresso or a long brunch with friends, we want every visit to be special.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Years Brewing</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>50k+</span>
                            <span className={styles.statLabel}>Happy Customers</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Sustainable</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
