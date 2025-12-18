"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import styles from "../login/login.module.css"; // Reuse login styles
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate fake delay
        setTimeout(async () => {
            await register({ name, email, password });
            router.push("/profile");
        }, 1000);
    };

    return (
        <div className={styles.splitLayout}>
            {/* Left: Visual Panel */}
            <div className={styles.visualPanel}>
                <Image
                    src="https://images.unsplash.com/photo-1529003600303-bd51f39627fb"
                    alt="Community"
                    fill
                    className={styles.heroImage}
                />
                <div className={styles.overlay}>
                    <p className={styles.quote}>"Good ideas start with great coffee."</p>
                    <p className={styles.author}>— Anonymous</p>
                </div>
            </div>

            {/* Right: Form Panel */}
            <div className={styles.formPanel}>
                <motion.div
                    className={styles.container}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.header}>
                        <h1 className={styles.title}>Join Our Family</h1>
                        <p className={styles.subtitle}>Create an account to unlock rewards and more.</p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <Input
                                id="name"
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <Input
                                id="email"
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                id="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <Button type="submit" variant="primary" className={styles.submitBtn} disabled={isLoading}>
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </Button>
                    </form>

                    <div className={styles.divider}>Or sign up with</div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button type="button" className={styles.socialBtn}>Google</button>
                        <button type="button" className={styles.socialBtn}>Apple</button>
                    </div>

                    <p className={styles.footer}>
                        Already have an account? <Link href="/login">Login here</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
