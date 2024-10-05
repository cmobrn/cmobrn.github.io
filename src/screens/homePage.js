import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import "../App.css";

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
      <h1>Nails by Carlijn</h1>
    </div>
  );
}

export default Home;
