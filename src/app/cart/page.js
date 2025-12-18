"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import styles from "./cart.module.css";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, cartTotal, finalTotal, discount, applyCoupon, clearCart, addToCart } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const [couponMsg, setCouponMsg] = useState("");

    const handleApplyCoupon = () => {
        if (!couponCode) return;
        const res = applyCoupon(couponCode);
        setCouponMsg(res.message);
    };

    // Smart Recommendations Logic (Mock)
    const recommendations = [
        { id: 99, name: "Choco Cookie", price: 30, desc: "Perfect with coffee", tags: ["Sweet"] },
        { id: 98, name: "Masala Bun", price: 40, desc: "Spicy kick", tags: ["Snack"] }
    ];

    if (cart.length === 0) {
        return (
            <div className={styles.emptyPage}>
                <div className={styles.emptyContainer}>
                    <h1 className={styles.emptyTitle}>Your Cart is Empty</h1>
                    <p className={styles.emptyText}>Looks like you haven't added any treats yet.</p>
                    <Button href="/menu" variant="primary">Browse Menu</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Your Cart</h1>

                <div className={styles.content}>
                    <div className={styles.cartItems}>
                        {cart.map((item) => (
                            <div key={item.cartItemId} className={styles.item}>
                                <div className={styles.itemInfo}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    {item.modifiers && Object.keys(item.modifiers).length > 0 && (
                                        <div className={styles.modifiers}>
                                            {Object.entries(item.modifiers).map(([key, val]) => (
                                                <span key={key} className={styles.modTag}>{val}</span>
                                            ))}
                                        </div>
                                    )}
                                    <p className={styles.itemPrice}>₹{item.price}</p>
                                </div>

                                <div className={styles.controls}>
                                    <div className={styles.quantity}>
                                        <button className={styles.qtyBtn} onClick={() => updateQuantity(item.cartItemId, -1)}>-</button>
                                        <span className={styles.qtyValue}>{item.quantity}</span>
                                        <button className={styles.qtyBtn} onClick={() => updateQuantity(item.cartItemId, 1)}>+</button>
                                    </div>
                                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.cartItemId)}>Remove</button>
                                </div>

                                <div className={styles.itemTotal}>₹{(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))}

                        <div className={styles.clearCart}>
                            <Button variant="ghost" onClick={clearCart}>Clear Cart</Button>
                        </div>

                        {/* Smart Recommendations */}
                        <div className={styles.recommendations}>
                            <h3 className={styles.recTitle}>Complete Your Meal</h3>
                            <div className={styles.recGrid}>
                                {recommendations.map(item => (
                                    <div key={item.id} className={styles.recCard}>
                                        <div>
                                            <div className={styles.recName}>{item.name}</div>
                                            <div className={styles.recPrice}>₹{item.price}</div>
                                        </div>
                                        <button className={styles.recAddBtn} onClick={() => addToCart(item)}>
                                            + Add
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.summary}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>

                        {/* Coupon Input */}
                        <div className={styles.couponSection}>
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className={styles.couponInput}
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                            />
                            <button className={styles.applyBtn} onClick={handleApplyCoupon}>Apply</button>
                        </div>
                        {couponMsg && <p className={styles.couponMsg}>{couponMsg}</p>}

                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>₹{cartTotal.toFixed(2)}</span>
                        </div>

                        {discount > 0 && (
                            <div className={`${styles.summaryRow} ${styles.discountRow}`}>
                                <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                                <span>-₹{(cartTotal * discount).toFixed(2)}</span>
                            </div>
                        )}

                        <div className={styles.summaryRow}>
                            <span>Tax (5%)</span>
                            <span>₹{(finalTotal * 0.05).toFixed(2)}</span>
                        </div>

                        <div className={`${styles.summaryRow} ${styles.total}`}>
                            <span>Total</span>
                            <span>₹{(finalTotal * 1.05).toFixed(2)}</span>
                        </div>

                        <Button href="/checkout" variant="primary" className={styles.checkoutBtn}>
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
