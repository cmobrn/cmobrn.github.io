import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import "../App.css";
import { ReactComponent as LargeLogo } from "../assets/logos/large_logo.svg";

import nails0 from "../assets/images/nails0.jpg";
import styles from "../styles/homePage.module.css";
import MapEmbed from "../components/MapEmbed.js";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Button } from "@mui/material";

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
      <div className={styles.homepage}>
      <LargeLogo/>
      <div className={styles.showcase}>
        <img src={nails0} style={{width: '100%', paddingTop: '1rem'}} alt="Nagels"/>
      </div>

      <div className={styles.appointment}>
      <Button
  variant="contained"
  href="/#afspraakmaken"
  sx={{
    backgroundColor: '#A8815B',
    color: 'white',
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    cursor: 'pointer',
    fontFamily: 'NotoSerifBold',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#845e3f', // Darker shade on hover
    },
  }}
>
  Maak een afspraak!
</Button>
    </div>

      <div className={styles.contact}>
        <h2><IoMdMail/><strong> Contact</strong></h2>
        <p>Bel of app mij op: +31655052201</p>
        <p>Mail naar: contact@nailsbycarlijn.nl</p>
      </div>

      <div className={styles.address}>
        <h2><FaLocationDot/><strong> Adres</strong></h2>
        <p>Pauwoogpad 17</p>
        <p>5247KK Rosmalen</p>
      </div>
      <MapEmbed />
      </div>
    </div>
  );
}

export default Home;
