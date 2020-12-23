import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { images } from "../../utility/config";
import ThemeToggle from "../themeToggle/ThemeToggle";

const NavBar = ({ children }) => {
  return (
    <>
      <nav className={styles.navBar}>
        {children}
        <ThemeToggle />
        <Link to="/" className={styles.logoContainer}>
          <img src={images.logoType} className={styles.logo} alt="logo" />
        </Link>
      </nav>
    </>
  );
};

export default React.memo(NavBar);
