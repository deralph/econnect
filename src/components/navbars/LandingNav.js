import React from "react";
import styles from "../../styles/navbar.module.css";

const LandingNav = () => {
  return (
    <nav className={styles.nav}>
      <img src="/econnectLogo.png" alt="econnect logo" />
      <ul className={styles.sign}>
        <li>login</li>
        <li className={styles.signCta}>register</li>
      </ul>
    </nav>
  );
};

export default LandingNav;
