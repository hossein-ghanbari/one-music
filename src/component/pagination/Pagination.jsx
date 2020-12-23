import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ pageNumber, activePage, onClick }) => {
  const paginationNumber = Array.from(Array(pageNumber).keys());
  return (
    <>
      <div className={styles.row}>
        {paginationNumber?.map((item) => {
          return (
            <button onClick={() => onClick(item + 1)} key={item} className={`${styles.item} ${item + 1 === activePage && styles.active}`}>
              {item + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Pagination);
