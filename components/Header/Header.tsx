import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header + " container"}>
        <div className={styles.navLinks}>
          <Link href="/">
            <a className={styles.headerLinks}>Home</a>
          </Link>
          <Link href="https://github.com/JosephKan3">
            <a className={styles.headerLinks} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/joseph-kan-21116b193">
            <a className={styles.headerLinks} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Link>
          <Link href="https://github.com/JosephKan3/personal-website">
            <a className={styles.headerLinks} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </Link>
          <a
            className={styles.headerLinks}
            href="/JosephKanResumeCurrent.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
