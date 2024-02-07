import React, { useState } from "react";
import {
  AppBar,
  Button,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo9.png";
import "../styles/HeaderStyles.css";

import Footer from "./Footer";
import Login from "../Forms/Login";
// import ApplyNowModal from "../Forms/Applypopup";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesAnchorEl, setCoursesAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [signInAnchorEl, setSignInAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [allCoursesAnchorEl, setAllCoursesAnchorEl] = useState(null);

  const handleAllCoursesOpen = (event) => {
    setAllCoursesAnchorEl(event.currentTarget);
  };

  const handleAllCoursesClose = () => {
    setAllCoursesAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCoursesOpen = (event) => {
    setCoursesAnchorEl(event.currentTarget);
  };

  const handleCoursesClose = () => {
    setCoursesAnchorEl(null);
  };

  const handleServicesOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleSignInOpen = (event) => {
    setSignInAnchorEl(event.currentTarget);
  };

  const handleSignInClose = () => {
    setSignInAnchorEl(null);
  };

  const isMobile = useMediaQuery("(max-width: 1500px)");

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: isMobile ? "green" : "transparent",
        color: isMobile ? "black" : "white",
      }}
    >
   

      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink  exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="">SHOP</NavLink>
        </li>

        <li>
          <NavLink to="">COLLECTION</NavLink>
        </li>
        <li>
          <NavLink to="">JOURNAL</NavLink>
        </li>
        <li>
          <NavLink to="">LOOKBOOK</NavLink>
        </li>


        {/* corporates */}

       

        <li>
          <NavLink to="">PAGES</NavLink>
        </li>
   
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "green" }}>
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, color: "white" }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              color="Red"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
               <Box sx={{ display: isMobile ? "none" : "block" ,position:'relative',top:'0.5rem'}} className="nav">
              <ul className="navigation-menu">
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">SHOP</NavLink>
                </li>
                <li>
                  <NavLink to="/">COLLECTION</NavLink>
                </li>
                <li>
                  <NavLink to="/">JOURNAL</NavLink>
                </li>

            

          

              

                <li>
                  <NavLink to="/">LOOKBOOK</NavLink>
                </li>
                <li>
                  <NavLink to="/ ">PAGES</NavLink>
                </li>
                
              </ul>
            </Box>
              {/* <img src={Logo} alt="logo" height={70} width="250" /> */}
            </Typography>
            <NavLink to="/" style={{marginRight:'2rem',textDecoration:'none'}}>
                   SPECIAL OFFER
                  </NavLink>
                  <NavLink to="/" style={{marginRight:'2rem',textDecoration:'none'}}>
                   PURCHASE THEME
                  </NavLink>
            <NavLink to="/Login" style={{background:'white'}}>
                    <Button color="primary" style={{color:'black'}} startIcon={<AccountCircleIcon />}>
                      Log in
                    </Button>
                  </NavLink>
          </Toolbar>
        </AppBar>
        {/* <ApplyNowModal open={isModalOpen} handleClose={closeModal} /> */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: isMobile ? "block" : "none",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                background:"green",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
