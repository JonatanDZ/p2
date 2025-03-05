import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <p>© {new Date().getFullYear()} My Next.js App. All rights reserved.</p>

            </div>
        </footer>
    );
}
  