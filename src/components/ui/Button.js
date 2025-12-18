import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className,
    type = "button"
}) {
    const classNames = `${styles.btn} ${styles[variant]} ${className || ""}`;

    if (href) {
        return (
            <Link href={href} className={classNames}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classNames} onClick={onClick}>
            {children}
        </button>
    );
}
