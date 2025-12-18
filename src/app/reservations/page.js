"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import styles from "./reservations.module.css";
import TableMap from "@/components/reservations/TableMap";

export default function ReservationsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        requests: ""
    });
    const [selectedTable, setSelectedTable] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const formRef = useRef(null);

    const handleTableSelect = (table) => {
        setSelectedTable(table);
        // Auto-update guests if table capacity is explicit, or just leave it? 
        // Let's suggest it but allow override.
        setFormData(prev => ({ ...prev, guests: Math.min(table.seats, 8) }));

        // Smooth scroll to form
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            ...formData,
            tableId: selectedTable?.id || 'Any',
            tableName: selectedTable?.label || 'Any'
        };

        try {
            const res = await fetch("/api/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setSuccess(true);
            } else {
                alert("Failed to book table. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error submitting form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    if (success) {
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.successCard}>
                        <div className={styles.icon}>🎉</div>
                        <h1 className={styles.heading}>Table Reserved!</h1>
                        <p className={styles.text}>
                            Thank you, {formData.name}.<br />
                            {selectedTable && <strong>{selectedTable.label} ({selectedTable.type})</strong>}<br />
                            is confirmed for {formData.date} at {formData.time}.
                        </p>
                        <p className={styles.subtext}>We've sent a confirmation to {formData.email}.</p>
                        <Button href="/" variant="primary">Return Home</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.mapSection}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <h1 className={styles.heading}>Book Your Experience</h1>
                        <p className={styles.text}>Select a table from our floor plan below to get started.</p>
                    </header>

                    <div className={styles.mapWrapper}>
                        <TableMap onSelect={handleTableSelect} selectedId={selectedTable?.id} />
                    </div>
                </div>
            </div>

            <div className={styles.container} ref={formRef}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formHeader}>
                        <h3>
                            {selectedTable
                                ? `Booking: ${selectedTable.label}`
                                : "Or fill in details to book any available spot"}
                        </h3>
                        {selectedTable && <button type="button" className={styles.clearBtn} onClick={() => setSelectedTable(null)}>Clear Selection</button>}
                    </div>

                    <div className={styles.row}>
                        <Input
                            id="name"
                            label="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="phone"
                            label="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Input
                        id="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <div className={styles.row}>
                        <Input
                            id="date"
                            label="Date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="time"
                            label="Time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="guests" className={styles.label}>Number of Guests</label>
                        <select
                            id="guests"
                            className={styles.select}
                            value={formData.guests}
                            onChange={handleChange}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                            ))}
                            <option value="9+">9+ (Contact us)</option>
                        </select>
                    </div>

                    <Input
                        id="requests"
                        label="Special Requests (Optional)"
                        textarea
                        rows={3}
                        value={formData.requests}
                        onChange={handleChange}
                        placeholder="Birthday, Anniversary, High Chair..."
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Booking..." : "Confirm Reservation"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
