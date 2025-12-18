"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useCart } from "@/context/CartContext";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
    const router = useRouter();
    const { cart, cartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Redirect if cart is empty
    if (cart.length === 0) {
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <h1>Your cart is empty</h1>
                    <Button href="/menu">Go back to Menu</Button>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: formData,
                    items: cart,
                    total: cartTotal * 1.1, // Including tax
                }),
            });

            if (res.ok) {
                clearCart();
                alert("Order placed successfully! (Mock)");
                router.push("/");
            } else {
                alert("Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            alert("Error placing order.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Checkout</h1>

                <div className={styles.grid}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Contact Information</h2>
                            <Input
                                id="name"
                                label="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                            <Input
                                id="email"
                                label="Email Address"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                            <Input
                                id="address"
                                label="Delivery Address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="123 Main St, Apt 4B"
                                required
                                textarea
                                rows={3}
                            />
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Payment</h2>
                            <div className={styles.paymentMock}>
                                <p>💳 Payment Gateway Mock</p>
                                <small>No actual payment will be processed.</small>
                            </div>
                        </section>

                        <Button
                            type="submit"
                            variant="primary"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Processing..." : `Pay ₹${(cartTotal * 1.05).toFixed(2)}`}
                        </Button>
                    </form>

                    <div className={styles.summary}>
                        <h2 className={styles.summaryTitle}>In Your Bag</h2>
                        <ul className={styles.itemList}>
                            {cart.map((item) => (
                                <li key={item.id} className={styles.item}>
                                    <span>{item.quantity}x {item.name}</span>
                                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.totalRow}>
                            <span>Total (Inc. Tax)</span>
                            <span>₹{(cartTotal * 1.05).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
