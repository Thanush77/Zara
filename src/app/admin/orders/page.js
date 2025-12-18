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

            <div className={styles.card}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '2px solid #ecf0f1' }}>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>ID</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Customer</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Items</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Total</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Status</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} style={{ borderBottom: '1px solid #ecf0f1' }}>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>#{order.id}</td>
                                <td style={{ padding: '1rem' }}>{order.customer}</td>
                                <td style={{ padding: '1rem' }}>{order.items}</td>
                                <td style={{ padding: '1rem' }}>₹{order.total}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        backgroundColor: statusColors[order.status],
                                        color: 'white',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '12px',
                                        fontSize: '0.85rem'
                                    }}>
                                        {order.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>
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
                                                cursor: 'pointer'
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
