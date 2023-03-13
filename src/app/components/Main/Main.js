import React from "react";
import DDCard from "./DDCard";
import HomeIntro from "./HomeIntro";
import MainStyle from "./Main.module.css";

export default function Main() {
  const mainStyle = {};
  return (
    <div className={MainStyle.main}>
      <HomeIntro />
      <DDCard />
    </div>
  );
}
