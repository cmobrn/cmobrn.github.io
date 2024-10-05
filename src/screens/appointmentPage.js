import React from "react";
import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";

function AppointmentPage() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <div style={{ margin: "5rem" }}></div>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Home"]} />
      </div>
      <h1>Maak een afspraak!</h1>
    </div>
  );
}

export default AppointmentPage;
