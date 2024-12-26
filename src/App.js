import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import GroupTours from "./components/GroupTours";
import Footer from "./components/Footer";
import ForeignTours from "./components/ForeignTours";
import Honeymoon from "./components/Honeymoon";
import Packages from "./components/Packages";
import Cruises from "./components/Cruises";
import Wedding from "./components/Wedding";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
  <div>
    <Router>
      <div className="header-navbar-container">
        <Header />
        <Navbar />
        
      </div>
      <Routes>
        {/* <Route path="/" element={<div><Home /></div>} /> */}
        <Route path="/group-tours" element={<div><GroupTours /></div>} />
        <Route path="/packages" element={<div><Packages/></div>} />
        <Route path="/foreign-tours" element={<div><ForeignTours/></div>} />
        <Route path="/honeymoon" element={<div><Honeymoon/></div>} />
        <Route path="/Cruises" element={<div><Cruises/></div>} />
        <Route path="/wedding" element={<div><Wedding/></div>} />
        <Route path="/about" element={<div><AboutUs/></div>} />
        <Route path="/contact" element={<div><ContactUs/></div>} />
      </Routes>
      
    </Router>
    <Home/>
    <div>
      <Footer /> 
      </div>
  </div>  
  );
}

export default App;
