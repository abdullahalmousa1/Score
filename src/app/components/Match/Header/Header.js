import styles from "./header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="col">
        <span className={styles.title}>Top Soccer Games</span>
      </div>
      <div className="col d-flex justify-content-end" style={{ gap: "15px" }}>
        <Link href="/matchResult" className={styles.viewAllButton}>View All</Link>
        <button className={styles.viewAllButton}>
          <i className="bi bi-chevron-compact-right"></i>
        </button>
        <button className={styles.viewAllButton}>
          <i className="bi bi-chevron-compact-left"></i>
        </button>
      </div>
    </>
  );
}
