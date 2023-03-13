import CustomLink from "./CustomLink";
import style from "./HomeBar.module.css";

function HomeBar(){
    return(
        <div className = {style.mainbar}>
            <div className="items">
              <ul>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
                <CustomLink to="/aim">AIM AND OBJECTIVIES</CustomLink>
                <CustomLink to="/admission">ADMISSION</CustomLink>
                <CustomLink to="/about">TOP ACHIEVERS</CustomLink>
                <CustomLink to="/aim">ACTIVITIES</CustomLink>
                <CustomLink to="/admission">CONTACT US</CustomLink>
              </ul>
            </div>
            <div className="search">
                <span className="search"></span>
            </div>
            <div className="cancel">
                <span className="cancel"></span>
            </div>
            <form action="#" >
                <input type="search" className="search_d" placeholder="SEARCH..."></input>
                <button type="submit" className="search_b"></button>
            </form>
        </div>
    )
}


export default HomeBar;