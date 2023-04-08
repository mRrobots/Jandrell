import style from "./News.module.css";
import avatar from "../../../assets/new.jpg";
import { Link, Route, Router } from "react-router-dom";
export default function News() {
  const newList = [
    {
      id: "1",
      image: avatar,
      title:
        "  DEVELOPING | EFF shutdown: Disorder and anarchy will not be allowed in SA, says Ramaphosa",
      message:
        "The EFF comes in peace and has not threatened violence, says party leader Julius Malema who then warned that anyone who attempted totake the EFF's constitutional rights away would 'meet their maker'.At a media briefing on Wednesday, Malema said the party's planned national shutdown on Monday might be the beginning of a revolution.",
      time: "4 hours go",
      status: "live",
    },
    {
      id: "2",
      image: avatar,
      title:
        "R103m Absa heist: UJ student accused of receiving R2m of stolen loot granted bail",
      message:
        "A University of Johannesburg student who allegedly received R2 million stolen from Absa, allegedly by the bank's former IT specialist, has been granted R2 000 bail.Thembelihle Racaza brought her bail application in the Johannesburg Specialised Commercial Crimes Court, sitting in Palm Ridge, on Wednesday.",
      time: "4 hours go",
      status: "live",
    },
    {
      id: "3",
      image: avatar,
      title:
        "  DEVELOPING | EFF shutdown: Disorder and anarchy will not be allowed in SA, says Ramaphosa",
      message:
        "The ANC used its majority in the National Assembly to defeat a motion of no-confidence in Speaker Nosiviwe Mapisa-Nqakula.",
      time: "4 hours go",
      status: "live",
    },
    {
      id: "3",
      image: avatar,
      title:
        "Facebook rapist: Deputy minister was informed by warder that Thabo Bester escaped",
      message:
        "The ANC used its majority in the National Assembly to defeat a motion of no-confidence in Speaker Nosiviwe Mapisa-Nqakula.",
      time: "4 hours go",
      status: "live",
    },
  ];

  const latestNews = newList.at(0);

  function News(props) {
    return (
      <>
        {props.newList.map((news, index) => (
          <div key={index} className={style.subnews}>
            <img src={news.image} width="100%" height="50%" />
            <div className={style.time}>
              <div>{news.status}</div>
              <div>{news.time}</div>
            </div>
            <Link to={news.id} state={news}>
              <div className={style.title}>{news.title}</div>
            </Link>
          </div>
        ))}
      </>
    );
  }
  return (
    <div className={style.news}>
      <h1>latest News</h1>
      <div className={style.latest}>
        <div className={style.time}>
          <div>{latestNews.status}</div>
          <div>{latestNews.time}</div>
        </div>
        <div className={style.title}>{latestNews.title}</div>
        <div className={style.info}>
          <img src={avatar} width="500px" height="250px"></img>
          <div className={style.message}>{latestNews.message}</div>
        </div>
      </div>
      <div className={style.others}>
        <News newList={newList} />
      </div>
    </div>
  );
}
