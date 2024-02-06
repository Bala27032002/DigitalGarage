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



const Topnav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesAnchorEl, setCoursesAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [signInAnchorEl, setSignInAnchorEl] = useState(null);

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

  const isMobile = useMediaQuery("(max-width: 600px)");

  const drawer = (

    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: isMobile ? "white" : "transparent",
        color: isMobile ? "black" : "white",
        
      }}
    >
 <Typography color="Red" variant="h6" component="div" sx={{ flexGrow: 1 }}>
  <img
    src={Logo}
    alt="logo"
    height={70}
    width={isMobile ? "100%" : "250"}
    sx={{ maxWidth: "250px" }}
  />
</Typography>

      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
  
        <li>
                <NavLink to="/manage">ALL COURSES</NavLink>
                </li>

                <Box sx={{ position: "relative", color: "black" }}>
                    <Button
                      color="inherit"
                      aria-label="services dropdown"
                      onClick={handleServicesOpen}
                      endIcon={<ExpandMoreIcon />}
                      sx={{
                        fontSize: '22px',
                        marginTop: "4px"
                      }}
                    >
                      SERVICES
                    </Button>
                    <Menu
                      id="services-dropdown"
                      anchorEl={servicesAnchorEl}
                      open={Boolean(servicesAnchorEl)}
                      onClose={handleServicesClose}
                    >
                      <MenuItem onClick={handleServicesClose}>
                        <NavLink to="/service" style={{ textDecoration: 'none' }}>HTD</NavLink>
                      </MenuItem>
                      <MenuItem onClick={handleServicesClose}>
                        <NavLink to="/Instutional" style={{ textDecoration: 'none' }}>INSTUTIONAL TRAINING</NavLink>
                      </MenuItem>
                      <MenuItem onClick={handleServicesClose}>
                        <NavLink to="/MCA" style={{ textDecoration: 'none' }}>MCA</NavLink>
                      </MenuItem>
                      {/* <MenuItem onClick={handleCoursesClose}>
                        <NavLink to="/Mca" style={{ textDecoration: 'none' }}>MCA</NavLink>
                      </MenuItem> */}
                      <MenuItem onClick={handleServicesClose}>
                        <NavLink to="/LateralTraining" style={{ textDecoration: 'none' }}>LATERAL TRAINING</NavLink>
                      </MenuItem>
                      {/* Add more MenuItem for other services */}
                    </Menu>
                  </Box>

{/* corporates */}

<Box sx={{ position: 'relative', color: 'black' }}>
                    <Button
                      color="inherit"
                      aria-label="corporates dropdown"
                      onClick={handleSignInOpen}
                      endIcon={<ExpandMoreIcon />}
                      sx={{
                        fontSize: '22px',
                        marginTop: "4px"
                      }}
                    >
                      Corporates
                    </Button>
                    <Menu
                      id="corporates-dropdown"
                      anchorEl={signInAnchorEl}
                      open={Boolean(signInAnchorEl)}
                      onClose={handleSignInClose}
                    >
                      <MenuItem onClick={handleSignInClose}>
                        <NavLink to="/HireUs" style={{ textDecoration: 'none' }}>Hire From Us</NavLink>
                      </MenuItem>
                      <MenuItem onClick={handleSignInClose}>
                        <NavLink to="/Train" style={{ textDecoration: 'none' }}>Train From Us</NavLink>
                      </MenuItem>
                      {/* Add more MenuItem for other services */}
                    </Menu>
                  </Box>


                  <li>
                  <NavLink to="/menu">Gallery</NavLink>
                </li>  
                <li>
                  <NavLink to="/SignInPage">
                    <Button color="primary" startIcon={<AccountCircleIcon />}>
                      Apply Now
                    </Button>
                  </NavLink> <br></br>    
                  <NavLink to="/Login">
                    <Button color="primary" startIcon={<AccountCircleIcon />}>
                      Log in
                    </Button>
                  </NavLink>
                  <NavLink to="/Enquirey">
                    {/* <Button color="primary" startIcon={<AccountCircleIcon />}>
                      Quick Enquiry
                    </Button> */}
                  </NavLink>
                </li>

                  
 
    
      </ul>
    </Box>
  );

  return (
    <>
   
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "white" }}>
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, color: "black" }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography color="Red" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="logo" height={70} width="250" />
            </Typography>
            <Box sx={{ display: isMobile ? "none" : "block" }} className="nav">
              <ul className="navigation-menu">
           
                

             
                <li>
              
                  <NavLink to="/Login">
                    <Button color="primary" startIcon={<AccountCircleIcon />}>
                      LOG OUT
                    </Button>
                  </NavLink>
                  <NavLink to="/Enquirey">
                    {/* <Button color="primary" startIcon={<AccountCircleIcon />}>
                      Quick Enquiry
                    </Button> */}
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: isMobile ? "block" : "none",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
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

 
export default Topnav;
