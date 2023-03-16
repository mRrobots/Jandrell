import style from "./Gallery.module.css";
import avatar from "../../assets/new.jpg";

export default function Gallery() {
  return (
    <div className={style.gallery}>
      <h1>Gallery</h1>
      <div className={style.options}>
        <div className={style.option}>
          <h2> Matric Dance</h2>
          <img src={avatar} width="200px" height="50px" />
        </div>
        <div className={style.option}>
          <h2> Sport </h2>
          <img src={avatar} width="200px" height="50px" />
        </div>
        <div className={style.option}>
          <h2> School </h2>
          <img src={avatar} width="200px" height="50px" />
        </div>
      </div>
    </div>
  );
}
