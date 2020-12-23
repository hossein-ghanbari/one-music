import React from "react";
import styles from "./List.module.css";

const List = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default List;
