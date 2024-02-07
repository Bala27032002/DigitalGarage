import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router";
import AdminImageTable from "./AdminTable";

const baseUrl = "http://localhost:4001/api";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const AddCourse = ({ updateTasksList }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState("");

  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const addTask = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/tasks`, {
        description,
        url,
        duration,
      });

      if (response.status === 201) {
        const newTask = response.data;

        setDescription("");
        setDuration("");
        setUrl("");
        // window.location.reload(); // Reload the page
        alert("Added successfully");
      } else {
        console.error("Failed to add the task.");
      }
    } catch (error) {
      console.error("Error occurred while adding the task:", error);
    }
  };

  return (
    <>
      {/* <div className="mano" style={{position:"absolute",left:"290px",fontSize:"20px",top:"-35px"}}>
     <Breadcrumbs  items={breadcrumbItems}   />
     </div> */}
      <h1
        style={{
          position: "absolute",
          left: "40rem",
          color: "white ",
          fontWeight: "bold",
          marginTop: "45px",
        }}
      >
        ADMIN PAGE
      </h1>

      <div className="vector1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <a href="http://localhost:3000" className="text-decoration-none">
                <p className="oc" style={{ marginTop: "40px" }}>
                  HOME /ADMIN MANAGEMENT
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="my-5">
        <div
          className="container-fluid"
          style={{ paddingLeft: "0", paddingRight: "0" }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              bottom: "50px",

              backgroundImage:
                "url('https://static.vecteezy.com/system/resources/previews/006/469/232/original/abstract-white-background-with-halftone-texture-free-vector.jpg')",
              backgroundSize: "cover", // Adjust as needed
              backgroundPosition: "center center", // Adjust as needed
              backgroundRepeat: "no-repeat",
              // Any other background-related styles
              height: "450px",
            }}
          >
            <AppBar style={{ background: "#00897b" }} position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                bgcolor="#00897b"
              >
                <Tab label="Add Lists" {...a11yProps(0)} />
                <Tab label="Carousel Lists" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <form onSubmit={addTask}>
                  <div
                    style={{
                      width: "50%",
                      position: "relative",
                      left: "20rem",
                      marginTop: "20px",
                    }}
                  >
                    <TextField
                      label="Fruits Name"
                      variant="outlined"
                      fullWidth
                      value={description}
                      onChange={handleDescriptionChange}
                      style={{ marginTop: "20px", backgroundColor: "#f5f5f5" }}
                    />

                    <TextField
                      label="Img_url"
                      variant="outlined"
                      fullWidth
                      value={url}
                      onChange={handleUrlChange}
                      style={{ marginTop: "20px", backgroundColor: "#f5f5f5" }}
                    />
                    <TextField
                      label="Prize"
                      variant="outlined"
                      fullWidth
                      value={duration}
                      onChange={handleDurationChange}
                      style={{ marginTop: "20px", backgroundColor: "#f5f5f5" }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      style={{ marginTop: "20px" }}
                    >
                      Add Fruits
                    </Button>
                  </div>
                </form>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <AdminImageTable />
              </TabPanel>
            </SwipeableViews>
          </Box>
        </div>
      </section>
    </>
  );
};

export default AddCourse;
