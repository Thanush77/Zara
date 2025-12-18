"use client";

import styles from "./catering.module.css";
import Button from "@/components/ui/Button";

export default function CateringPage() {
    return (
        <div className={styles.page}>
            <div className={styles.split}>
                <div className={styles.info}>
                    <h1 className="animate-fade-up">Catering by Delight.</h1>
                    <p className={styles.lead}>Elevate your office lunches, parties, and gatherings with the authentic taste of Bangalore.</p>

                    <ul className={styles.features}>
                        <li>✅ Customized Menus</li>
                        <li>✅ Live Coffee Counters</li>
                        <li>✅ Packaging & Logistics</li>
                        <li>✅ Dedicated Event Manager</li>
                    </ul>

                    <div className={styles.contact}>
                        <h3>Bulk Orders?</h3>
                        <p>Call us directly at <strong>+91 98765 43210</strong></p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <div className={`${styles.card} glass hover-lift`}>
                        <h2>Get a Quote</h2>
                        <form className={styles.form}>
                            <div className={styles.field}>
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className={styles.field}>
                                <label>Company / Organization</label>
                                <input type="text" placeholder="Acme Corp" />
                            </div>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>Date</label>
                                    <input type="date" />
                                </div>
                                <div className={styles.field}>
                                    <label>Guests</label>
                                    <input type="number" placeholder="50" />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <label>Requirements</label>
                                <textarea rows="4" placeholder="Need vegan options, 2 coffee counters..."></textarea>
                            </div>
                            <Button variant="primary" className={styles.submitBtn}>Submit Request</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
