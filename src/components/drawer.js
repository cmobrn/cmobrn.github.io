import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import styles from "../styles/navbar.module.css";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

const StyledIconButton = styled(IconButton)({
  marginLeft: "auto",
});

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "100%",
    height: "100%",
    backgroundColor: "#eee9e5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const StyledMenuIcon = styled(MenuIcon)({
  color: "#000",
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 20,
  right: 20,
});

const ListItemTextStyled = styled(ListItemText)(({ isActive }) => ({
  "& .MuiListItemText-primary": {
    fontSize: "2rem",
    fontFamily: "NotoSerifBold, sans-serif",
    color: isActive ? "#A8815B" : "black",
  },
  textAlign: "left",
}));

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "auto",
  gap: "5px",
});

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Update activeItem based on URL path or hash
  useEffect(() => {
    const handleScroll = () => {
      const currentPath = window.location.hash || window.location.pathname;
      if (currentPath === "/" || currentPath === "") {
        setActiveItem("Home");
      } else if (currentPath.includes("afspraakmaken")) {
        setActiveItem("Afspraak maken");
      } else if (currentPath.includes("prijslijst")) {
        setActiveItem("Prijslijst");
      } else if (currentPath.includes("portfolio")) {
        setActiveItem("Portfolio");
        }
        else if (currentPath.includes("contact")) {
        setActiveItem("Contact");
        }
    };

    window.addEventListener("hashchange", handleScroll);
    window.addEventListener("popstate", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("hashchange", handleScroll);
      window.removeEventListener("popstate", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconContainer>
            <a
              href="https://www.instagram.com/nails_by_carlijn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{color: "#A8815B"}} size={"1.35rem"} />
            </a>

            <a
              href="https://www.tiktok.com/@nails.by.carlijn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok style={{color: "#A8815B"}} size={"1.5rem"} />
            </a>
          </IconContainer>
          <StyledIconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <StyledMenuIcon style={{ color: "#a68500" }} />
          </StyledIconButton>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor="top" open={isOpen} onClose={toggleDrawer}>
        <CloseButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={toggleDrawer}
        >
          <CloseIcon style={{ color: "#a68500" }} />
        </CloseButton>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          bgcolor={"#eee9e5"}
        >
          <List>
            {["Home", "Afspraak maken", "Prijslijst", "Portfolio", "Contact"].map((item) => (
              <ListItem
                button
                component="a"
                href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "")}`}
                key={item}
              >
                <ListItemTextStyled
                  primary={item}
                  isActive={activeItem === item}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </StyledDrawer>
    </div>
  );
};

export default NavDrawer;
