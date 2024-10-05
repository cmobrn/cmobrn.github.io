import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import styles from "../styles/navbar.module.css";

import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
  let navigate = useNavigate();


  return (
    <div className={styles.navbar}>
      <Stack direction="row" spacing={10}>
        <Stack direction="row" spacing={{ xs: 0, sm: 1, md: 6 }}>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/afspraakmaken")}>Afspraak maken</Button>
          <Button onClick={() => navigate("/overmij")}>Over mij</Button>
        </Stack>
        <Stack direction="row" spacing={{ xs: 0, sm: 1}}>

          <a
            href="https://www.github.com/laurens88"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaInstagram size={"1.35rem"}/>

          </a>

          <a
            href="https://www.linkedin.com/in/laurens-debruin/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaTiktok size={"1.5rem"}/>
          </a>

        </Stack>
      </Stack>
    </div>
  );
}

export default Navbar;
