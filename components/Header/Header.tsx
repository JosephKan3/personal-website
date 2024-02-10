import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header + " container"}>
        <div className={styles.navLinks}>
          <Link href="https://github.com/JosephKan3">
            <a className={styles.headerLinks}>GitHub</a>
          </Link>
          <Link href="https://www.linkedin.com/in/joseph-kan-21116b193">
            <a className={styles.headerLinks}>LinkedIn</a>
          </Link>
          <Link href="https://github.com/JosephKan3/personal-website">
            <a className={styles.headerLinks} target="_blank">
              Source Code
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
