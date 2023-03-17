import CustomLink from "./CustomLink";
import style from "./HomeBar.module.css";

function HomeBar() {
  return (
    <div className={style.mainbar}>
      <ul>
        <CustomLink to="/home">HOME</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
        <CustomLink to="/aim">AIM AND OBJECTIVIES</CustomLink>
        <CustomLink to="/admission">ADMISSION</CustomLink>
        <CustomLink to="/about">TOP ACHIEVERS</CustomLink>
        <CustomLink to="/aim">ACTIVITIES</CustomLink>
        <CustomLink to="/admission">CONTACT US</CustomLink>
      </ul>
      <form action="#">
        <input type="search" placeholder="SEARCH..."></input>
        <button type="submit" className="search_b">
          search
        </button>
      </form>
    </div>
  );
}

export default HomeBar;
