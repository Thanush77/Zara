"use client";
import styles from "./contact.module.css";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function ContactPage() {
    const [faqOpen, setFaqOpen] = useState(null);

    const faqs = [
        { q: "Do you take reservations?", a: "Yes! You can book a table directly through our Reservations page." },
        { q: "Is there parking available?", a: "We have valet parking available for all our guests." },
        { q: "Do you have vegan options?", a: "Absolutely! Check out our Menu for a wide range of vegan and fermented goodies." },
        { q: "Can I work from the cafe?", a: "We love digital nomads! We offer free high-speed WiFi and plenty of power outlets." }
    ];

    const toggleFaq = (idx) => setFaqOpen(faqOpen === idx ? null : idx);

    return (
        <div className={styles.page}>
            {/* Hero */}
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Let's Start a Conversation</h1>
                    <p className={styles.subtitle}>Questions, feedback, or just want to say hello? We're all ears.</p>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.splitLayout}>
                    {/* Left Column: Info & Visuals */}
                    <div className={styles.infoColumn}>

                        <div className={styles.contactCard}>
                            <h2 className={styles.cardTitle}>Visit Our Flagship</h2>
                            <p className={styles.cardText}>
                                Experience the aroma of fresh roasts and the buzz of Koramangala.
                            </p>

                            <div className={styles.detailsList}>
                                <div className={styles.detailItem}>
                                    <span className={styles.icon}>📍</span>
                                    <div>
                                        <strong>Address</strong>
                                        <p>123 Coffee Street, 4th Block,<br />Koramangala, Bengaluru - 560034</p>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.icon}>📞</span>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.icon}>✉️</span>
                                    <div>
                                        <strong>Email</strong>
                                        <p>hello@cafedelight.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.socials}>
                                <a href="#" className={styles.socialLink}>Instagram</a>
                                <a href="#" className={styles.socialLink}>Twitter</a>
                                <a href="#" className={styles.socialLink}>Facebook</a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.356262483838!2d77.61514331530964!3d12.94901239087095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144702955555%3A0x6b4c1234567890!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className={styles.mapFrame}
                            ></iframe>
                        </div>

                    </div>

                    {/* Right Column: Form */}
                    <div className={styles.formColumn}>
                        <form className={styles.glassForm}>
                            <h3 className={styles.formHeading}>Send a Message</h3>

                            <div className={styles.inputGroup}>
                                <label>Your Name</label>
                                <input type="text" placeholder="John Doe" className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Subject</label>
                                <select className={styles.input}>
                                    <option>General Inquiry</option>
                                    <option>Events & Catering</option>
                                    <option>Feedback</option>
                                    <option>Careers</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Message</label>
                                <textarea rows="5" placeholder="Tell us more..." className={styles.textarea}></textarea>
                            </div>

                            <Button variant="primary" size="full">Send Message</Button>
                        </form>

                        {/* FAQ Section */}
                        <div className={styles.faqSection}>
                            <h3 className={styles.faqHeading}>Frequently Asked</h3>
                            {faqs.map((faq, idx) => (
                                <div key={idx} className={styles.faqItem}>
                                    <button className={styles.faqQuestion} onClick={() => toggleFaq(idx)}>
                                        {faq.q}
                                        <span className={styles.faqIcon}>{faqOpen === idx ? '−' : '+'}</span>
                                    </button>
                                    <div className={`${styles.faqAnswer} ${faqOpen === idx ? styles.open : ''}`}>
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
