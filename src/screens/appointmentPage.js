import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.js";
import NavDrawer from "../components/drawer.js";
import { ReactComponent as LargeLogo } from "../assets/logos/large_logo.svg";

const procedures = [
  { id: 1, name: "Gellak incl. Manicure", url: "https://calendly.com/contact-nailsbycarlijn/gellak-incl-manicure?primary_color=a8815b" },
  { id: 2, name: "French Manicure", url: "https://calendly.com/contact-nailsbycarlijn/french-manicure?primary_color=a8815b" },
  { id: 3, name: "Gellak Verwijderen & Aanbrengen (Incl. Manicure)", url: "https://calendly.com/contact-nailsbycarlijn/gellak-verwijderen-aanbrengen-incl-manicure?primary_color=a8815b" },
  { id: 4, name: "Gellak Verwijderen", url: "https://calendly.com/contact-nailsbycarlijn/gellak-verwijderen?primary_color=a8815b" },
  { id: 5, name: "Gellak Nailart", url: "https://calendly.com/contact-nailsbycarlijn/gellak-nailairt?primary_color=a8815b" },
  { id: 6, name: "Biab (Incl. Manicure)", url: "https://calendly.com/contact-nailsbycarlijn/biab-incl-manicure?primary_color=a8815b" },
  { id: 7, name: "Biab Verwijderen & Aanbrengen (Incl. Manicure)", url: "https://calendly.com/contact-nailsbycarlijn/biab-verwijderen-aanbrengen-incl-manicure?primary_color=a8815b" },
  { id: 8, name: "Biab Overlay (Incl. Manicure)", url: "https://calendly.com/contact-nailsbycarlijn/biab-overlay-incl-manicure?primary_color=a8815b" },
  { id: 9, name: "Biab Verwijderen", url: "https://calendly.com/contact-nailsbycarlijn/biab-verwijderen?primary_color=a8815b" },
];

function AppointmentPage() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if the component unmounts
      document.body.removeChild(script);
    };
  }, [selectedProcedure]); // Reload script on procedure change

  const handleSelectProcedure = (procedure) => {
    setSelectedProcedure(procedure.id);
    setDropdownOpen(false);
  };

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

      {/* Custom dropdown */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#a8815b",
            color: "white",
            border: "none",
            fontSize: "16px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {selectedProcedure
            ? procedures.find((proc) => proc.id === selectedProcedure).name
            : "Kies een procedure..."}
        </button>

        {dropdownOpen && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#C8A78B",
              color: "white",
              padding: 0,
              margin: 0,
              listStyleType: "none",
              borderRadius: "4px",
              overflowY: "auto",
              zIndex: 10,
              textAlign: "left",
            }}
          >
            {procedures.map((procedure) => (
              <li
                key={procedure.id}
                onClick={() => handleSelectProcedure(procedure)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                  backgroundColor: "transparent",
                  color: procedure.id === selectedProcedure ? "#ffffff" : "white",
                }}
              >
                {procedure.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display the selected Calendly embed */}
      {selectedProcedure && (
        <div
          key={selectedProcedure} // Key to force re-render
          className="calendly-inline-widget"
          data-url={procedures.find((proc) => proc.id === selectedProcedure).url}
          style={{ minWidth: "320px", height: "700px", marginTop: "20px" }}
        ></div>
      )}
      <LargeLogo style={{paddingTop: "30%"}}/>
    </div>
  );
}

export default AppointmentPage;
