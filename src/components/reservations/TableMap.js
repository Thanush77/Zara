"use client";
import styles from "./TableMap.module.css";
import { useState } from "react";

const tables = [
    // Window Seats (Top)
    { id: 1, label: "Window 1", type: "2-Seater", x: 20, y: 10, seats: 2 },
    { id: 2, label: "Window 2", type: "2-Seater", x: 50, y: 10, seats: 2 },
    { id: 3, label: "Window 3", type: "2-Seater", x: 80, y: 10, seats: 2 },

    // Center Tables (Middle)
    { id: 4, label: "Center 1", type: "4-Seater", x: 30, y: 40, seats: 4 },
    { id: 5, label: "Center 2", type: "4-Seater", x: 70, y: 40, seats: 4 },
    { id: 6, label: "Center 3", type: "4-Seater", x: 30, y: 65, seats: 4 },
    { id: 7, label: "Center 4", type: "4-Seater", x: 70, y: 65, seats: 4 },

    // Booths (Right/Bottom)
    { id: 8, label: "Booth A", type: "6-Seater", x: 10, y: 90, seats: 6 },
    { id: 9, label: "Booth B", type: "6-Seater", x: 50, y: 90, seats: 6 },
    { id: 10, label: "Booth C", type: "6-Seater", x: 90, y: 90, seats: 6 },
];

export default function TableMap({ onSelect, selectedId }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div className={styles.scene}>
            <div className={styles.floor}>
                {/* Decor Elements */}
                <div className={styles.plants} style={{ top: '5%', left: '5%' }}>🌿</div>
                <div className={styles.plants} style={{ top: '5%', right: '5%' }}>🌿</div>
                <div className={styles.counter}>☕ Bar Counter</div>
                <div className={styles.rug}></div>

                {/* Tables */}
                {tables.map((table) => (
                    <div
                        key={table.id}
                        className={`${styles.tableWrapper} ${selectedId === table.id ? styles.selected : ''}`}
                        style={{ left: `${table.x}%`, top: `${table.y}%` }}
                        onClick={() => onSelect(table)}
                        onMouseEnter={() => setHovered(table.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className={`${styles.table} ${styles[`type${table.seats}`]}`}>
                            <div className={styles.tableTop}>
                                <span className={styles.tableLabel}>{table.id}</span>
                            </div>
                            <div className={styles.tableBase}></div>
                            <div className={styles.tableLeg}></div>
                        </div>

                        {/* Chairs */}
                        <div className={styles.chairs}>
                            {Array.from({ length: table.seats }).map((_, i) => (
                                <div
                                    key={i}
                                    className={styles.chair}
                                    style={{
                                        transform: `rotateZ(${360 / table.seats * i}deg) translateY(35px)`
                                    }}
                                >
                                    <div className={styles.chairSeat}></div>
                                    <div className={styles.chairBack}></div>
                                </div>
                            ))}
                        </div>

                        {/* Tooltip */}
                        {(hovered === table.id || selectedId === table.id) && (
                            <div className={styles.tooltip}>
                                <strong>{table.label}</strong>
                                <span>{table.type}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.instruction}>
                Rotate & Select a Table to Book
            </div>
        </div>
    );
}
