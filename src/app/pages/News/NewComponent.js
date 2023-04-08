import React from "react";
import style from "./News.module.css";
import avatar from "../../../assets/new.jpg";
import { Link, useLocation } from "react-router-dom";
function NewComponent(props) {
  const location = useLocation();
  const news = location.state;

  return (
    <div>
      <div className={style.latest}>
        <div className={style.time}>
          <div>{news.status}</div>
          <div>{news.time}</div>
        </div>
        <div className={style.title}>{news.title}</div>
        <div className={style.info}>
          <img src={avatar} width="500px" height="250px"></img>
          <div className={style.message}>{news.message}</div>
        </div>
      </div>
      <div>
        <Link to="/news">Go back to Main News</Link>
      </div>
    </div>
  );
}
export default NewComponent;
