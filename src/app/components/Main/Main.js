import React from "react";
import ThemeContext, { themes } from "../../context/theme-context";
import DDCard from "./DDCard";
import HomeIntro from "./HomeIntro";
import MainStyle from "./Main.module.css";

export default function Main() {
  const mainStyle = {};
  return (
    <ThemeContext.Provider value={themes.light}>
      <div className={MainStyle.main}>
        <HomeIntro />
        <DDCard />
      </div>
    </ThemeContext.Provider>
  );
}
