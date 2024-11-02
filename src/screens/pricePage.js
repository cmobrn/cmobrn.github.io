import React from "react";
import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import styles from "../styles/pricePage.module.css";
import { ReactComponent as Logo } from "../assets/logos/logo.svg";

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
      <h1 className={styles.title}>Prijs Lijst</h1>
      
      <div className={styles.priceList}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Gellak</h2>
          <hr className={styles.separator} />
          <div className={styles.item}>
            <span>Gellak (Incl. Manicure)</span>
            <span>€30</span>
          </div>
          <div className={styles.item}>
            <span>French Manicure</span>
            <span>€40</span>
          </div>
          <div className={styles.item}>
            <span>Gellak Verwijderen & Aanbrengen (Incl. Manicure)</span>
            <span>€40</span>
          </div>
          <div className={styles.item}>
            <span>Gellak Verwijderen</span>
            <span>€10</span>
          </div>
          <div className={styles.item}>
            <span>Gellak Nailart</span>
            <span>€5<strong>-</strong>€15</span>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Biab</h2>
          <hr className={styles.separator} />
          <div className={styles.item}>
            <span>Biab (Incl. Manicure)</span>
            <span>€40</span>
          </div>
          <div className={styles.item}>
            <span>Biab Verwijderen & Aanbrengen (Incl. Manicure)</span>
            <span>€55</span>
          </div>
          <div className={styles.item}>
            <span>Biab Overlay (Incl. Manicure)</span>
            <span>€40</span>
          </div>
          <div className={styles.item}>
            <span>Biab Verwijderen</span>
            <span>€15</span>
          </div>
        </div>
        
        <footer className={styles.footer}>
          <span>Nails By Carlijn</span>
          <Logo />
        </footer>
      </div>
    </div>
  );
}

export default PricePage;
