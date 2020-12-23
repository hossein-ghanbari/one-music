import React, { useState, useEffect } from "react";
import styles from "./SideBar.module.css";
import { useLocation } from "react-router-dom";

import SideBarMenu from "./sideBarMenu/SideBarMenu";
import NavBar from "../navBar/NavBar";

const SideBar = () => {
  const fixedSide = window.matchMedia(`(min-width: 992px)`);
  const [sideShow, setSideShow] = useState(fixedSide.matches);
  let location = useLocation();

  const handleSideShow = () => {
    setSideShow(!sideShow);
  };

  const mediaQueryChanged = () => {
    setSideShow(fixedSide.matches);
    // console.log(fixedSide.matches);
  };

  useEffect(() => {
    fixedSide.addListener(mediaQueryChanged);
    return () => {
      fixedSide.removeListener(mediaQueryChanged);
    };
  }, []);

  useEffect(() => {
    !fixedSide.matches && setSideShow(false);
  }, [fixedSide.matches, location]);

  return (
    <>
      <NavBar>
        <i className={`material-icons-round ${styles.sideTrigger}`} onClick={handleSideShow}>
          menu
        </i>
      </NavBar>
      <div className={`${styles.sideOverlay} ${!fixedSide.matches && sideShow && styles.show}`} onClick={handleSideShow} />

      <aside className={`${styles.SideBarBox} ${sideShow ? styles.show : styles.hide}`}>
        <SideBarMenu />
      </aside>
    </>
  );
};

export default SideBar;
