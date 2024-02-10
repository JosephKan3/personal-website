import React from "react";
import styles from "@/components/Navbar.module.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <a
            className={styles.navButton}
            href="https://github.com/JosephKan3"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className={styles.navButton}
            href="https://www.linkedin.com/in/joseph-kan-21116b193"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className={styles.navButton}
            href="https://github.com/JosephKan3/personal-website"
            target="_blank"
          >
            Source Code
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
