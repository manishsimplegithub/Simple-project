import React from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import NavBar from "./NavBar";
// import Transfer from "./Transfer";
// import Sdata from "./Sdata";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Service";
import "./index.css";

const Main = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
