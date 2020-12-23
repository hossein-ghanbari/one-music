import React from "react";
import styles from "./Loading.module.css";
import { images } from "../../utility/config";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.logoContainer}>
        <img src={images.logo} className={styles.logo} alt="logo" />
      </div>
    </div>
  );
};

export default Loading;
