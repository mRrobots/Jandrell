import style from "./News.module.css";
import avatar from "../../../assets/new.jpg";
export default function News() {
  function News(props) {
    return (
      <div className={style.subnews}>
        <img src={avatar} width="100%" height="50%" />

        <div className={style.time}>
          <div>Live</div>
          <div>4 hours ago</div>
        </div>

        <div className={style.title}>
          DEVELOPING | EFF shutdown: Disorder and anarchy will not be allowed in
          SA, says Ramaphosa
        </div>
      </div>
    );
  }
  return (
    <div className={style.news}>
      <h1>latest News</h1>
      <div className={style.latest}>
        <div className={style.time}>
          <div>Live</div>
          <div>4 hours ago</div>
        </div>
        <div className={style.title}>
          DEVELOPING | EFF shutdown: Disorder and anarchy will not be allowed in
          SA, says Ramaphosa
        </div>
        <div className={style.info}>
          <img src={avatar} width="500px" height="250px"></img>
          <div className={style.message}>
            The EFF comes in peace and has not threatened violence, says party
            leader Julius Malema who then warned that anyone who attempted to
            take the EFF's constitutional rights away would "meet their maker".
            At a media briefing on Wednesday, Malema said the party's planned
            national shutdown on Monday might be the beginning of a revolution.
          </div>
        </div>
      </div>
      <div className={style.others}>
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </div>
    </div>
  );
}
