import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Nav from "../../components/NavBar/Nav";
import News from "../News/News";
import Gallery from "../Gallery/Gallery";
import ParentPortal from "../Parents/ParentPortal";
import Results from "../Result/Results";
import AimObjective from "../AimObjective/AimObjective";
import Contacts from "../Contacts/Contacts";
import Activities from "../Activities/Activities";
import TopAchievers from "../TopAchievers/TopAchievers";
import Admission from "../Admission/Admission";
import About from "../About/About";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.home}>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/parents" element={<ParentPortal />} />

        <Route path="aim" element={<AimObjective />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/topachievers" element={<TopAchievers />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
