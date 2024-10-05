import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/homePage.js";
import Appointment from "./screens/appointmentPage.js";
import About from "./screens/aboutPage.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afspraakmaken" element={<Appointment />} />
          <Route path="/overmij" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
