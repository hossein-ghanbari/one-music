import React, { useState, useEffect, useRef, useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import styles from "./Player.module.css";
import ReactPlayer from "react-player";
import { images } from "../../utility/config";

const Player = () => {
  const [url, setUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  // const [loaded, setLoaded] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [loop, setLoop] = useState(false);

  const [seeking, setSeeking] = useState(false);

  const playerRef = useRef(null);

  const { musicData } = useContext(PlayerContext);

  const load = (url) => {
    setUrl(url);
    setPlayed(0);
    setPlaying(true);
    // setLoaded(0);
  };
  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleStop = () => {
    setUrl(null);
    setPlaying(false);
    setPlayed(0);
    playerRef.current.seekTo(0);
  };
  const handleToggleLoop = () => {
    setLoop(!loop);
  };
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };
  const handleToggleMuted = () => {
    setMuted(!muted);
  };
  const handleSetPlaybackRate = (e) => {
    setPlaybackRate(parseFloat(e.target.value));
  };
  const handlePlay = () => {
    setPlaying(true);
  };
  const handlePause = () => {
    setPlaying(false);
  };
  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };
  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };
  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    playerRef.current.seekTo(parseFloat(e.target.value));
  };
  const handleProgress = (state) => {
    // console.log("onProgress", state);
    if (!seeking) {
      setPlayed(state.played);
    }
  };
  const handleEnded = () => {
    setPlaying(loop);
  };
  const handleDuration = (newDuration) => {
    setDuration(newDuration);
  };
  // format time
  const pad = (string) => {
    return ("0" + string).slice(-2);
  };
  const format = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  useEffect(() => {
    musicData?.file && load(musicData?.file);
    // console.log(musicData)
    return () => {};
  }, [musicData]);

  return (
    <>
      <div className={styles.playerBox}>
        <div className={styles.playerDet}>
          <img className={styles.trackImg} src={musicData?.cover || images.logo} alt={musicData?.artist || "one music"} />
          <div className={styles.trackDet}>
            <p className={`${styles.trackText} ${!musicData && styles.empty}`}>{musicData?.title}</p>
            <p className={`${styles.trackText} ${!musicData && styles.empty}`}>{musicData?.artist}</p>
          </div>
        </div>

        <div className={styles.controlBtns}>
          <button className={`${styles.btnPlay} ${playing && styles.pauseIcon}`} onClick={handlePlayPause} title={playing ? "pause" : "play"}>
            <i className="material-icons-round">{!playing ? "play_arrow" : "pause"}</i>
          </button>

          <button className={styles.btnStop} onClick={handleStop} title="stop">
            <i className="material-icons-round">stop</i>
          </button>
        </div>

        <div className={styles.playerTime}>
          <span className={styles.timeText}>{format(duration * played)}</span>
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onTouchStart={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            onTouchEnd={handleSeekMouseUp}
            className={styles.timeSeek}
          />
          <span className={styles.timeText}>{format(duration)}</span>
        </div>

        <div className={styles.optBtns}>
          <button className={`${styles.btnRep} ${loop && styles.active}`} onClick={handleToggleLoop} title="repeat">
            <i className="material-icons-round">repeat</i>
          </button>
          <a href={url} target="_blank" rel="noopener noreferrer nofollow" className={styles.btnDownload} title="download">
            <i className="material-icons-round">system_update_alt</i>
          </a>
          <button className={`${styles.btnSpeed} ${playbackRate === 1.0 && styles.active}`} onClick={handleSetPlaybackRate} value={1}>
            1x
          </button>
          <button className={`${styles.btnSpeed} ${playbackRate === 1.5 && styles.active}`} onClick={handleSetPlaybackRate} value={1.5}>
            1.5x
          </button>
          <button className={`${styles.btnSpeed} ${playbackRate === 2.0 && styles.active}`} onClick={handleSetPlaybackRate} value={2}>
            2x
          </button>
        </div>

        <div className={styles.playerVolume}>
          <input type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} className={styles.volumeSeek} />
          <button className={`${styles.btnMute} ${muted && styles.active}`} onClick={handleToggleMuted} title="mute">
            <i className="material-icons-round">{!muted ? "volume_up" : "volume_off"}</i>
          </button>
        </div>

        <ReactPlayer
          ref={playerRef}
          // controls={true}
          className={styles.rp}
          width="0%"
          height="0%"
          url={url}
          playing={playing}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          // onReady={() => console.log("onReady")}
          // onStart={() => console.log("onStart")}
          onPlay={handlePlay}
          onPause={handlePause}
          // onBuffer={() => console.log("onBuffer")}
          // onSeek={(e) => console.log("onSeek", e)}
          onEnded={handleEnded}
          // onError={(e) => console.log("onError", e)}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>
    </>
  );
};

export default React.memo(Player);
