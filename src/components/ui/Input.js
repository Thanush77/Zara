import styles from "./Input.module.css";

export default function Input({
    label,
    id,
    type = "text",
    placeholder,
    value,
    onChange,
    textarea = false,
    rows = 4
}) {
    return (
        <div className={styles.group}>
            {label && <label htmlFor={id} className={styles.label}>{label}</label>}
            {textarea ? (
                <textarea
                    id={id}
                    className={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    className={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
}
