import React, { useState, createContext } from "react";

export const ThemeContext = createContext(null);
export const SetThemeContext = createContext(null);

const getEnvPreferredTheme = () => {
  const isLightPrefers = window.matchMedia("(prefers-color-scheme: light)");
  return isLightPrefers.matches ? "light" : "dark";
};

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(getEnvPreferredTheme());

  return (
    <ThemeContext.Provider value={{ themeMode }}>
      <SetThemeContext.Provider value={{ setThemeMode }}>{children}</SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
