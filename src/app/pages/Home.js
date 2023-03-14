import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import HomeBar from "../components/NavBar/HomeBar";
import Nav from "../components/NavBar/Nav";
import Events from "./Events";
import Gallery from "./Gallery";
import ParentPortal from "./ParentPortal";
import Results from "./Results";

export default function Home() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/parents" element={<ParentPortal />} />
      </Routes>
      <Footer />
    </div>
  );
}
