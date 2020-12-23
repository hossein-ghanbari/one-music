import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import { ThemeContext, SetThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { themeMode } = useContext(ThemeContext);
  const { setThemeMode } = useContext(SetThemeContext);

  const handleToggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  return (
    <>
      <button className={`${styles.themeToggleBtn} ${themeMode === "dark" && styles.dark}`} onClick={handleToggleTheme}>
        {themeMode === "dark" ? "☀️" : "🌙"}
      </button>
    </>
  );
};

export default React.memo(ThemeToggle);
