import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import overmij from "../assets/images/overmij.jpg";
import styles from "../styles/contactPage.module.css";

function Contact() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <div style={{ margin: "5rem" }}></div>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Over Mij"]} />
      </div>
      <div className={styles.aboutPage}>
      <h1>Over mij</h1>
      <p>
      Welkom bij mijn website!

Ik ben Carlijn de Bruin en ik heb sinds november 2024 mijn eigen bedrijf “Nails By Carlijn” geopend als nagelstyliste. 

Ik ben hier erg trots op en ik zou graag mijn enthousiasme en passie voor gellak en BIAB met u delen. En u natuurlijk blij maken met mooie en verzorgde nagels. 

Bij vragen kunt u mij altijd contacteren. 

Hopelijk zie ik u snel bij uw afspraak met een kopje koffie of thee! 

      </p>
    <img src={overmij} style={{width: "80%"}} alt="Nagels"/>
    </div>
    </div>
  );
}

export default Contact;
