import React from "react";
import styles from "./SideBarMenu.module.css";
import { NavLink } from "react-router-dom";
import { images } from "../../../utility/config";

const SideBarMenu = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <img src={images.logoType} className={styles.logo} alt="logo" />
      </div>
      <ul className={styles.menu}>
        <li>
          <NavLink exact={true} to="/" activeClassName={styles.active}>
            <i className="material-icons-round">playlist_play</i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/musics" activeClassName={styles.active}>
            <i className="material-icons-round">audiotrack</i>
            <span>Musics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/artists" activeClassName={styles.active}>
            <i className="material-icons-round">person</i>
            <span>Artists</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SideBarMenu;
