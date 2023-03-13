import React from "react";
import DDCard from "./DDCard";
import HomeIntro from "./HomeIntro";
import MainStyle from "./Main.module.css";

export default function Main() {
  const mainStyle = {};
  return (
    <div className={MainStyle.main}>
      <div className="home-intro">
        <HomeIntro />
      </div>
      <div className="diary-date-card">
        <DDCard />
      </div>
    </div>
  );
}
