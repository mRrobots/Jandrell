import { createContext } from "react";

export const themes = {
  dark: {
    color: "black",
    "background-color": "white",
  },
  light: {
    color: "white",
    "background-color": "black",
  },
};

const ThemeContext = createContext(themes.dark);
export default ThemeContext;
