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

            <div className={styles.card}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '2px solid #ecf0f1' }}>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Item Name</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Price (₹)</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Status</th>
                            <th style={{ padding: '1rem', color: '#7f8c8d' }}>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #ecf0f1' }}>
                                <td style={{ padding: '1rem', fontWeight: '500' }}>{item.name}</td>
                                <td style={{ padding: '1rem' }}>
                                    <input
                                        type="number"
                                        value={item.price}
                                        onChange={(e) => updatePrice(item.id, e.target.value)}
                                        style={{
                                            padding: '0.4rem',
                                            width: '80px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        color: item.stock ? '#27ae60' : '#e74c3c',
                                        fontWeight: '600'
                                    }}>
                                        {item.stock ? 'In Stock' : 'Sold Out'}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <button
                                        onClick={() => toggleStock(item.id)}
                                        style={{
                                            border: '1px solid #bdc3c7',
                                            background: 'white',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.85rem'
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
