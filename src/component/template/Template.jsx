import React, { useContext } from "react";
import styles from "./Template.module.css";
import { ThemeContext } from "../../context/ThemeContext";

import Player from "../../component/player/Player";
import SideBar from "../../component/sideBar/SideBar";

const Template = ({ children }) => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <main className={themeMode}>
      <SideBar />
      <Player />
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default Template;
