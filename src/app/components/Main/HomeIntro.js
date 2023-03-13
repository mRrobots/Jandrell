import React from "react";
import style from "./HomeIntro.module.css";
import avatar from "../../../assets/blade.jpg";
export default function HomeIntro() {
  return (
    <div className={style.home}>
      <div className={style.intro}>
        <h1> Welcome To Jandrell Secondary School</h1>

        <p> Located at Mpumalanga, the rise of the sun</p>

        <hr />
      </div>
      <div className={style.welcome}>
        <img src={avatar}></img>
        <div className={style.message}>
          <p>
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough,
            the next logical step is to find a random paragraph.
            <hr /> We created the Random Paragraph Generator with you in mind.
          </p>
        </div>
      </div>
    </div>
  );
}
