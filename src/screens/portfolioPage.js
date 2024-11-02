import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";

function Portfolio() {
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <div style={{ margin: "5rem" }}></div>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Home"]} />
      </div>
        <h1>Portfolio</h1>
        <p>Coming soon...</p>
    </div>
  );
}

export default Portfolio;
