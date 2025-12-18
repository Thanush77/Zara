import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Café Delight</h3>
                    <p>Brewing happiness one cup at a time.</p>
                </div>
                <div className={styles.section}>
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/catering">Catering</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4>Contact</h4>
                    <p>123 Coffee Street, Flavor Town</p>
                    <p>+91 98765 43210</p>
                    <p>hello@cafedelight.com</p>
                </div>
                <div className={styles.section}>
                    <h4>Hours</h4>
                    <p>Mon-Fri: 7am - 8pm</p>
                    <p>Sat-Sun: 8am - 9pm</p>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Café Delight. All rights reserved.
            </div>
        </footer>
    );
}
