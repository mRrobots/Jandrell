import style from "./MainBar.module.css";
import {Link,useMatch,useResolvedPath} from "react-router-dom"
function MainBar(){
    return(
        <nav className = {style.mainbar}>
            <Link to = "/" className={style.schoolname}>Jandrell Secondary Scool</Link>
            <ul>
            <CustomLink to="/news">News</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/results">Results</CustomLink>
            <CustomLink to="/parents">Parents Portal</CustomLink>
            </ul>
        </nav>
    )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? style.active : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default MainBar;