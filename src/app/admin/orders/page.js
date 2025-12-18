"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import styles from "../admin.module.css"; // Shared styles

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([
        { id: 101, customer: "Rahul K", items: "2x Filter Coffee", total: 80, status: "Pending" },
        { id: 102, customer: "Aditi R", items: "1x Bun Maska, 1x Chai", total: 110, status: "Preparing" },
        { id: 103, customer: "John D", items: "1x Cappuccino", total: 150, status: "Ready" },
        { id: 104, customer: "Sneha M", items: "2x Iced Tea", total: 240, status: "Delivered" },
    ]);

    const updateStatus = (id, newStatus) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    };

    const statusColors = {
        "Pending": "#e74c3c",
        "Preparing": "#f39c12",
        "Ready": "#3498db",
        "Delivered": "#27ae60"
    };

    return (
        <div>
            <h1 className={styles.heading}>Order Management</h1>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td style={{ fontWeight: 'bold' }}>#{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.items}</td>
                                <td>₹{order.total}</td>
                                <td>
                                    <span style={{
                                        backgroundColor: statusColors[order.status],
                                        color: 'white',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600
                                    }}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    {order.status !== 'Delivered' && (
                                        <button
                                            onClick={() => {
                                                const next = order.status === 'Pending' ? 'Preparing'
                                                    : order.status === 'Preparing' ? 'Ready'
                                                        : 'Delivered';
                                                updateStatus(order.id, next);
                                            }}
                                            style={{
                                                border: '1px solid #bdc3c7',
                                                background: 'transparent',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            Next Stage &rarr;
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
