import React from "react";
import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import styles from "../styles/pricePage.module.css";
import { ReactComponent as LargeLogo } from "../assets/logos/large_logo.svg";

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
      <h1 className={styles.title}>Prijslijst</h1>
      
      <div className={styles.priceList}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Gellak</h2>
          <hr className={styles.separator} />
          <div className={styles.item}>
            <span>Gellak (Incl. Manicure)</span>
            <span>€30</span>
          </div>
          <div className={styles.item}>
            <span>Gellak Verwijderen</span>
            <span>€10</span>
          </div>
          <div className={styles.item}>
            <span>Gellak Verwijderen & Aanbrengen (Incl. Manicure)</span>
            <span>€40</span>
          </div>
          <div className={styles.item}>
            <span>Gellak met Nail Art (Incl. Manicure)</span>
            <span>€40</span>
          </div>
          <div className={styles.item}>
            <span>Gellak Verwijderen & Aanbrengen met Nail Art</span>
            <span>€50</span>
          </div>
          <div className={styles.item}>
            <span>Gellak met French Manicure</span>
            <span>€40</span>
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
            <span>Biab Verwijderen</span>
            <span>€15</span>
          </div>
          <div className={styles.item}>
            <span>Biab Verwijderen & Aanbrengen (Incl. Manicure)</span>
            <span>€55</span>
          </div>
          <div className={styles.item}>
            <span>Biab Overlay (Incl. Manicure)</span>
            <span>€40</span>
          </div>
          
        </div>
        
        <footer className={styles.footer}>
          <LargeLogo style={{paddingTop: "1rem"}}/>
          {/* <span>Nails By Carlijn</span> */}
          {/* <Logo style={{display: "flex", justifyContent: "center", alignItems:"center", width: "30%"}}/> */}
        </footer>
      </div>
    </div>
  );
}

export default PricePage;
