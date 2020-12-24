import React from "react";
import styles from "./ArtistItem.module.css";
import LazyLoad from "react-lazyload";
import Color from "color-thief-react";
import { Link } from "react-router-dom";

const ArtistItem = ({ itemData, style }) => {
  return (
    <>
      <Color src={itemData?.cover} crossOrigin="Anonymous" format="hex">
        {({ data, loading }) => {
          if (!loading) {
            return (
              <div className={styles.col} style={style}>
                <Link
                  className={styles.item}
                  style={{
                    backgroundColor: data,
                    boxShadow: "0 7px 10px -4px" + data + "aa",
                  }}
                  // onClick={() => alert(itemData.id)}
                  to={`/artists/${itemData.id}`}
                >
                  <div className={styles.coverContainer}>
                    <LazyLoad offset={-10} once>
                      <img
                        src={itemData.cover}
                        className={styles.cover}
                        alt={itemData.name}
                      />
                    </LazyLoad>
                    <span
                      className={styles.wave}
                      style={{ backgroundColor: data }}
                    />
                  </div>
                  <h6 className={styles.artistName}>{itemData.name}</h6>
                </Link>
              </div>
            );
          }
        }}
      </Color>
    </>
  );
};

export default ArtistItem;
