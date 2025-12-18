import styles from "./careers.module.css";
import Button from "@/components/ui/Button";

export default function CareersPage() {
    const openings = [
        { role: "Senior Barista", type: "Full-time", exp: "2-3 Years", loc: "Koramangala" },
        { role: "Pastry Chef", type: "Full-time", exp: "1-2 Years", loc: "Indiranagar" },
        { role: "Cafe Manager", type: "Full-time", exp: "5+ Years", loc: "Whitefield" }
    ];

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className="animate-fade-up">Join the Tribe</h1>
                    <p className="animate-fade-up">We are building more than a cafe. We are building a culture.</p>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.intro}>
                    <h2>Why Work With Us?</h2>
                    <div className={styles.benefits}>
                        <div className={styles.benefitCard}>
                            <h3>☕ Endless Coffee</h3>
                            <p>On the house. Premium blends, every shift.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <h3>🚀 Growth</h3>
                            <p>Internal workshops and career progression tracks.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <h3>💫 Vibe</h3>
                            <p>A workspace that feels like home. Zero toxicity.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.openings}>
                    <h2>Open Positions</h2>
                    <div className={styles.list}>
                        {openings.map((job, idx) => (
                            <div key={idx} className={styles.jobRow}>
                                <div>
                                    <h3 className={styles.jobTitle}>{job.role}</h3>
                                    <div className={styles.jobMeta}>
                                        <span>{job.type}</span> • <span>{job.exp}</span> • <span>{job.loc}</span>
                                    </div>
                                </div>
                                <Button variant="secondary" size="sm">Apply Now</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
