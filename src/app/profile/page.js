"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";
import styles from "./profile.module.css";

export default function ProfilePage() {
    const { user, logout, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading || !user) return <div className={styles.loading}>Loading profile...</div>;

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.avatar}>
                        {user.name.charAt(0)}
                    </div>
                    <h2 className={styles.name}>{user.name}</h2>
                    <p className={styles.email}>{user.email}</p>

                    <div className={styles.loyaltyBox}>
                        <span className={styles.pointsLabel}>Loyalty Points</span>
                        <span className={styles.pointsValue}>{user.points}</span>
                    </div>

                    <button className={styles.logoutBtn} onClick={logout}>Logout</button>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h3 className={styles.heading}>Order History</h3>
                        {user.orders && user.orders.length > 0 ? (
                            <div className={styles.orderList}>
                                {user.orders.map((order, idx) => (
                                    <div key={idx} className={styles.orderCard}>
                                        <div className={styles.orderHeader}>
                                            <span className={styles.orderId}>Order #{Math.floor(Math.random() * 1000)}</span>
                                            <span className={styles.orderDate}>{new Date().toLocaleDateString()}</span>
                                        </div>
                                        <div className={styles.orderTotal}>
                                            ₹{order.total.toFixed(2)}
                                        </div>
                                        <p className={styles.orderItems}>
                                            {order.items.map(i => `${i.quantity}x ${i.name}`).join(", ")}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className={styles.empty}>No past orders yet. Time to order something tasty!</p>
                        )}
                    </section>

                    <section className={styles.section}>
                        <h3 className={styles.heading}>Saved Addresses</h3>
                        {user.addresses && user.addresses.length > 0 ? (
                            <div className={styles.addressList}>
                                {user.addresses.map(addr => (
                                    <div key={addr.id} className={styles.addressCard}>
                                        <h4>{addr.label}</h4>
                                        <p>{addr.text}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className={styles.empty}>No addresses saved.</p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
