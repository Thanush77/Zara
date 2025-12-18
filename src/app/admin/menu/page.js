"use client";

import { useState } from "react";
import styles from "../admin.module.css";
// Mocking menu data locally for admin demo as we don't have a DB yet to sync
// In a real app, this would fetch from /api/menu and PUT changes back.

const initialMenu = [
    { id: 1, name: "Espresso", price: 120, stock: true },
    { id: 2, name: "Filter Kaapi", price: 40, stock: true },
    { id: 3, name: "Bun Maska", price: 60, stock: true },
    { id: 4, name: "Cappuccino", price: 160, stock: true },
    { id: 5, name: "Masala Chai", price: 50, stock: false },
];

export default function AdminMenuPage() {
    const [items, setItems] = useState(initialMenu);

    const toggleStock = (id) => {
        setItems(items.map(i => i.id === id ? { ...i, stock: !i.stock } : i));
    };

    const updatePrice = (id, newPrice) => {
        setItems(items.map(i => i.id === id ? { ...i, price: Number(newPrice) } : i));
    };

    return (
        <div>
            <h1 className={styles.heading}>Menu Management</h1>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price (₹)</th>
                            <th>Status</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td style={{ fontWeight: '500' }}>{item.name}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.price}
                                        onChange={(e) => updatePrice(item.id, e.target.value)}
                                        style={{
                                            padding: '0.4rem',
                                            width: '80px',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '6px'
                                        }}
                                    />
                                </td>
                                <td>
                                    <span style={{
                                        color: item.stock ? '#27ae60' : '#e74c3c',
                                        fontWeight: '600',
                                        background: item.stock ? '#e8f8f5' : '#fdedec',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        fontSize: '0.85rem'
                                    }}>
                                        {item.stock ? 'In Stock' : 'Sold Out'}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        onClick={() => toggleStock(item.id)}
                                        style={{
                                            border: '1px solid #cbd5e0',
                                            background: 'white',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            fontSize: '0.85rem',
                                            color: '#4a5568'
                                        }}
                                    >
                                        Toggle
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
