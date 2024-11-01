import React from "react";
import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/homePage.js";
import Appointment from "./screens/appointmentPage.js";
import Price from "./screens/pricePage.js";
import Contact from "./screens/contactPage.js";
import Portfolio from "./screens/portfolioPage.js";
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Nails by Carlijn";
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afspraakmaken" element={<Appointment />} />
          <Route path="/prijslijst" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
