import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <p className={styles.content}>
                Copyright © 2025 - Les Petits Plats
            </p>
        </footer>
    );
}
