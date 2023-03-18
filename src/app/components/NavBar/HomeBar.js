import CustomLink from "./CustomLink";
import style from "./HomeBar.module.css";

function HomeBar() {
  return (
    <div className={style.mainbar}>
      <ul>
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
        <CustomLink to="/aim">AIM AND OBJECTIVIES</CustomLink>
        <CustomLink to="/admission">ADMISSION</CustomLink>
        <CustomLink to="/topachievers">TOP ACHIEVERS</CustomLink>
        <CustomLink to="/activities">ACTIVITIES</CustomLink>
        <CustomLink to="/contact">CONTACT US</CustomLink>
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
