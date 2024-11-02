import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import "../App.css";
import { ReactComponent as LargeLogo } from "../assets/logos/large_logo.svg";

import nails0 from "../assets/images/nails0.jpg";
import styles from "../styles/homePage.module.css";
import MapEmbed from "../components/MapEmbed.js";

function Home() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <div style={{ margin: "5rem" }}></div>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Home"]} />
      </div>
      <LargeLogo/>
      <div className={styles.showcase}>
        <img src={nails0} style={{width: '100%'}} alt="Nagels" />
      </div>

      <div className={styles.contact}>
        <h1><strong>Contact</strong></h1>
        <p>Bel ons op 06-12345678</p>
        <p>Mail ons op contact@nailsbycarlijn.nl</p>
      </div>
      <MapEmbed />
    </div>
  );
}

export default Home;
