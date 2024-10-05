import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";

function About() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <div style={{ margin: "5rem" }}></div>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Home"]} />
      </div>
      <h1>Over mij</h1>
      <p>
        Ik ben Carlijn de Bruin en ik ben 21 jaar oud. Mijn salon is gevestigd
        in de Groote Wielen, Rosmalen. Ik ben een super enthousiaste
        nagelstyliste die mijn enthousiasme en passie graag wil delen met mijn
        klanten. Het is namelijk altijd al mijn droom baan geweest en ik ben
        heel trotst dat ik dit nu heb bereikt. Ik heb mijn cursussen gevolgd bij
        Lakwerk in Amsterdam Oud Zuid en heb hier meerdere certificaten behaald;
        “Let’s own the gelbottle”, “Learn this BIAB” en “Unleash your inner
        artist”. Al mijn behandelingen kunt u vinden onder het kopje
        “Behandelingen”. Bij vragen hoor ik dat graag en kunt u mij altijd een
        bericht via whatsapp sturen of e-mail. Hopelijk zie ik u snel bij een
        afspraak! 💅🏻🩷
      </p>
    </div>
  );
}

export default About;
