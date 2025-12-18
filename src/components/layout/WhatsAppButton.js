"use client";

import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
    const phoneNumber = "919876543210"; // Mock number
    const message = "Hi Café Delight! I'd like to place an order.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatBtn}
            aria-label="Chat on WhatsApp"
        >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="32" height="32" />
        </a>
    );
}
