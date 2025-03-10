import styles from "../styles/Searchbar.module.css";

export default function Searchbar() {
    return (
        <div className={styles.searchbar}>
            <svg className={styles.searchIcon} stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
    );
  }
  