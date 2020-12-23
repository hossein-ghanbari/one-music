import React, { useState, createContext } from "react";

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [musicData, setMusicData] = useState(null);
  const value = { musicData, setMusicData };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

export default PlayerProvider;
