"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import styles from "./login.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login(email, password);
            router.push("/profile");
        } catch (err) {
            setError("Invalid credentials (try any email/pass)");
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.splitLayout}>
            {/* Left: Visual Panel */}
            <div className={styles.visualPanel}>
                <Image
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
                    alt="Cafe Ambiance"
                    fill
                    className={styles.heroImage}
                />
                <div className={styles.overlay}>
                    <p className={styles.quote}>"Coffee is a language in itself."</p>
                    <p className={styles.author}>— Jackie Chan</p>
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
                        <h1 className={styles.title}>Welcome Back</h1>
                        <p className={styles.subtitle}>Enter your details to access your account.</p>
                    </div>

                    {error && (
                        <motion.div
                            className={styles.error}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className={styles.form}>
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
                        <Button type="submit" variant="primary" className={styles.submitBtn} disabled={isLoading}>
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>

                    <div className={styles.divider}>Or continue with</div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button type="button" className={styles.socialBtn}>Google</button>
                        <button type="button" className={styles.socialBtn}>Apple</button>
                    </div>

                    <p className={styles.footer}>
                        Don't have an account? <Link href="/register">Create one now</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
