
import "./css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import SignUp from "./components/user/SignUp";

function App() {
  return (
      <div className=" w-screen h-auto no-scrollbar ">
        <Router>
          
          <Topbar/>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Layout/>} >
                <Route path="/" element= {<Home/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/signup" element={ <SignUp/> } />
              </Route>
            </Routes>
          <Footer/>  
          <BottomNav className="" />
        </Router>
      </div>
  );
}

export default App;
