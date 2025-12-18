"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import styles from "./admin.module.css";

export default function AdminLayout({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading) {
            if (!user || user.role !== 'admin') {
                router.push("/login");
            }
        }
    }, [user, loading, router]);

    if (loading || !user || user.role !== 'admin') {
        return <div className={styles.loading}>Verifying access...</div>;
    }

    const navItems = [
        { label: "Dashboard", path: "/admin" },
        { label: "Orders", path: "/admin/orders" },
        { label: "Menu", path: "/admin/menu" },
        { label: "Customers", path: "/admin/customers" }, // Placeholder
    ];

    return (
        <div className={styles.adminLayout}>
            <aside className={styles.sidebar}>
                <div className={styles.brand}>Admin Panel</div>
                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className={styles.user}>
                    Logged in as {user.name}
                </div>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
