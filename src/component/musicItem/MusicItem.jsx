import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import styles from "./MusicItem.module.css";
import LazyLoad from "react-lazyload";

const MusicItem = ({ itemData }) => {
  const { setMusicData } = useContext(PlayerContext);

  return (
    <>
      <div className={styles.col}>
        <div className={styles.item} onClick={() => setMusicData(itemData)}>
          <div className={styles.coverContainer}>
            <LazyLoad once>
              <img src={itemData.cover} className={styles.cover} alt={itemData.title} />
            </LazyLoad>
            <div className={styles.itemHover}>
              <i className="material-icons-round">play_arrow</i>
            </div>
          </div>
          <h6 className={styles.musicName}>{itemData.title}</h6>
          <p className={styles.artistName}>{itemData.artist}</p>
        </div>
      </div>
    </>
  );
};

export default MusicItem;
