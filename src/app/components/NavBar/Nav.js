import HomeBar from "./HomeBar";
import MainBar from "./MainBar";

function Nav() {
  return (
    <nav
    // style={{ position: "fixed", width: "100%", overflow: "hidden", top: "0" }}
    >
      <MainBar />
      <HomeBar />
    </nav>
  );
}

export default Nav;
