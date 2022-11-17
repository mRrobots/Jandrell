import MainBar from "./app/components/NavBar/MainBar";
import Home from "./app/pages/Home"
import Events from "./app/pages/Events"
import Gallery from "./app/pages/Gallery"
import ParentPortal from "./app/pages/ParentPortal"
import Results from "./app/pages/Results"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div>
      <MainBar/>
      <div className="none">
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route path ="/news" element = {<Events/>} />
          <Route path ="/gallery" element = {<Gallery/>} />
          <Route path ="/parents" element = {<ParentPortal/>} />
          <Route path ="/results" element = {<Results/>} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
