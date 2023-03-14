import style from "./MainBar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import CustomLink from "./CustomLink";
import Logo from "./Logo";
function MainBar() {
  return (
    <div className={style.mainbar}>
      <div className={style.schoollogo}>
        <Logo />
        <Link to="/" className={style.schoolname}>
          Jandrell Secondary Scool
        </Link>
      </div>
      <ul>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/gallery">Gallery</CustomLink>
        <CustomLink to="/results">Results</CustomLink>
        <CustomLink to="/parents">Parents Portal</CustomLink>
      </ul>
    </div>
  );
}

export default MainBar;
