import style from "./Gallery.module.css";
import avatar from "../../../assets/new.jpg";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className={style.gallery}>
      <h1>Gallery</h1>
      <div className={style.options}>
        <div className={style.option}>
          <h2> Matric Dance</h2>
          <Link to={"matricdance"} state={"MatricDance"}>
            <img src={avatar} width="200px" height="50px" />
          </Link>
        </div>
        <div className={style.option}>
          <h2> Sport </h2>
          <Link to={"sport"} state={"Sport"}>
            <img src={avatar} width="200px" height="50px" />
          </Link>
        </div>
        <div className={style.option}>
          <h2> School </h2>
          <Link to={"school"} state={"School"}>
            <img src={avatar} width="200px" height="50px" />
          </Link>
        </div>
      </div>
    </div>
  );
}
