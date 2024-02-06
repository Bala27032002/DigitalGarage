import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Card,
  Container,
  Grid,
  Rating,
} from "@mui/material";
import { CardContent, CardMedia, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Layout from "../Layout/Layout";
import axios from "axios";
// import CareerSection from "./Careersection";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  svgIcon: {
    color: "black", // Set the desired color here
  },
}));

const Component3 = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const tasksList = [
    {
      id: 1,
      url: "path_to_image_1.jpg",
      description: "Description of task 1",
      category: "Category 1",
      duration: 10,
    },
    {
      id: 2,
      url: "path_to_image_2.jpg",
      description: "Description of task 2",
      category: "Category 2",
      duration: 20,
    },
    {
      id: 3,
      url: "path_to_image_3.jpg",
      description: "Description of task 3",
      category: "Category 1",
      duration: 15,
    },
    {
      id: 4,
      url: "path_to_image_4.jpg",
      description: "Description of task 4",
      category: "Category 2",
      duration: 25,
    },
  ];

  useEffect(() => {
    // fetchTasks(); // Remove backend connection
    // fetchCategories(); // Remove backend connection
    setFilteredTasks(tasksList); // Set tasksList directly
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredTasks(tasksList);
    } else {
      const filteredTasks = tasksList.filter(
        (task) => task.category === selectedCategory
      );
      setFilteredTasks(filteredTasks);
    }
  }, [tasksList, selectedCategory]);

  return (
    <div style={{ overflowX: "hidden", background: "white" }}>
      <Container fluid style={{ marginBottom: "20px", padding: "0 20px" }}>
        <Typography style={{ fontSize: "36px" }}>Top Selling Products</Typography>
        <Grid container spacing={2} style={{ marginTop: "30px" }}>
          {filteredTasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={3} key={task.id}>
              <Card style={{ background: "none", marginBottom: "20px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={task.url}
                  alt="Course"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    <b>Fruits:</b>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{ textAlign: "justify" }}
                  >
                    {task.description}
                  </Typography>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{ textAlign: "left" }}
                  >
                    <b>$</b> {task.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container><br/><br/>
      <Container fluid style={{ marginBottom: "20px", padding: "0 20px" }}>
        <Typography style={{ fontSize: "36px" }}>Discount</Typography>
        <Grid container spacing={2} style={{ marginTop: "30px" }}>
          {filteredTasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={3} key={task.id}>
              <Card style={{ background: "none", marginBottom: "20px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={task.url}
                  alt="Course"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    <b>Fruits:</b>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{ textAlign: "justify" }}
                  >
                    {task.description}
                  </Typography>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{ textAlign: "left" }}
                  >
                    <b>$</b> {task.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <CareerSection /> */}
    </div>
  );
};

export default Component3;
