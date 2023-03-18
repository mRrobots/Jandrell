import React from "react";
import style from "./Footer.module.css";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.box}>
        <h1>Links</h1>
        <ul className={style.link}>
          <li>Home</li>
          <li>About</li>
          <li>Parent </li>
          <li>Results</li>
        </ul>
      </div>
      <div className={style.box}>
        <h1>Letter</h1>
        <form className={style.message}>
          <input placeholder="Enter your email" />
          <button>Submit</button>
        </form>
      </div>
      <div className={style.box}>
        <h1>Contacts</h1>
        <p>Mpumalanga ,Standerton 2430</p>
      </div>
    </footer>
  );
}

export default Footer;
