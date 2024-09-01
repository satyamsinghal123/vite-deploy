import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About us/About";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
