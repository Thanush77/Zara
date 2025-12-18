"use client";

import Button from "@/components/ui/Button";
import styles from "./events.module.css";
import Image from "next/image";

export default function EventsPage() {
    const events = [
        {
            id: 1,
            title: "Jazz & Java Night",
            date: "Dec 24, 2024 • 7:00 PM",
            desc: "Experience the smooth sounds of The Bangalore Jazz Trio while sipping on our signature artisanal blends. A perfect Christmas Eve vibe.",
            image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop",
            tag: "Live Music"
        },
        {
            id: 2,
            title: "Latte Art Workshop",
            date: "Dec 30, 2024 • 11:00 AM",
            desc: "Learn the secrets of the perfect pour. Our head barista takes you through a 2-hour masterclass on frothing and etching.",
            image: "https://images.unsplash.com/photo-1556740758-90de2929e083?q=80&w=2670&auto=format&fit=crop",
            tag: "Workshop"
        },
        {
            id: 3,
            title: "Open Mic Comedy",
            date: "Jan 05, 2025 • 8:00 PM",
            desc: "Laugh your heart out with the city's best upcoming comics. Coffee, snacks, and good vibes guaranteed.",
            image: "https://images.unsplash.com/photo-1585672522687-39328812a64c?q=80&w=2574&auto=format&fit=crop",
            tag: "Live Show"
        }
    ];

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.overlay}></div>
                <div className={styles.headerContent}>
                    <h1 className={`${styles.title} animate-fade-up`}>Happenings @ Delight</h1>
                    <p className={`${styles.subtitle} animate-fade-up`}>More than just coffee. It's a community.</p>
                </div>
            </header>

            <section className={styles.container}>
                <div className={styles.grid}>
                    {events.map((event) => (
                        <div key={event.id} className={`${styles.card} hover-lift glass`}>
                            <div className={styles.imageWrapper}>
                                <span className={styles.tag}>{event.tag}</span>
                                <img src={event.image} alt={event.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.date}>{event.date}</div>
                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                <p className={styles.desc}>{event.desc}</p>
                                <div className={styles.actions}>
                                    <Button variant="primary" size="sm">Book Tickets</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.newsletter}>
                <h2>Never Miss a Beat</h2>
                <p>Subscribe to our newsletter for early access to event tickets.</p>
                <div className={styles.inputGroup}>
                    <input type="email" placeholder="Your email address" />
                    <Button variant="primary">Subscribe</Button>
                </div>
            </section>
        </div>
    );
}
