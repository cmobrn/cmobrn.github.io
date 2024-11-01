import React from "react";
import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import styles from "../styles/pricePage.module.css";

function PricePage() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <div style={{ margin: "5rem" }}></div>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Home"]} />
      </div>
      <h1>Prijslijst</h1>
      <table>
        <thead>
          <tr>
            <th>Behandeling</th>
            <th>Prijs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Gelcolour + Manicure</td>
          <td>35</td>
          </tr>
          <tr>
          <td>Verwijderen Gelcolour + Manicure + Gelcolour</td>
          <td>50</td>
          </tr>
          <tr>
            <td>Manicure zonder Gelcolour</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Gelcolour voeten</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Gelcolour voeten + Verwijderen</td>
            <td>42.50</td>
          </tr>
          <tr>
            <td>Verwijderen Gellak</td>
            <td>17.50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PricePage;
