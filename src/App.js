import MainBar from "./app/components/NavBar/MainBar";
import Home from "./app/pages/Home"
import Events from "./app/pages/Events"
import Gallery from "./app/pages/Gallery"
import ParentPortal from "./app/pages/ParentPortal"
import Results from "./app/pages/Results"
import { Route, Routes } from "react-router-dom"
import Nav from "./app/components/NavBar/Nav";
function App() {
  return (
    <div>
      <Home/>
      {/* <Routes>
          <Route path ="/news" element = {<Events/>} />
          <Route path ="/gallery" element = {<Gallery/>} />
          <Route path ="/parents" element = {<ParentPortal/>} />
          <Route path ="/results" element = {<Results/>} />
        </Routes> */}
        </div>
  );
}

export default App;
