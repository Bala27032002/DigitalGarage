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
import axios from "axios";
// import CareerSection from "./Careersection";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  svgIcon: {
    color: "black", // Set the desired color here
  },
}));

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const baseUrl = "http://localhost:4001/api";
  const [tasksList, setTasksList] = useState([]);
  const [categories, setCategories] = useState([]);
  const classes = useStyles(); 

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${baseUrl}/tasks`);
      if (response.ok) {
        const tasks = await response.json();
        setTasksList(tasks);
      } else {
        console.error("Failed to fetch tasks from the server.");
      }
    } catch (error) {
      console.error("Error occurred while fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get(`${baseUrl}/Categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

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

  const handleChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleShowAllCourses = () => {
    setSelectedCategory("");
  };

  const downloadSyllabus = () => {
    const fileUrl =
      "https://www.unl.edu/gradstudies/current/teaching/Syllabus_Sample.pdf";
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Course_Syllabus.pdf";
        a.click();
      });
  };

  return (
      <div style={{ overflowX: "hidden" }}>

        <Container fluid style={{ marginBottom: "20px", padding: "0 20px" }}>
       
<Typography style={{fontSize:"36px"}}>Featured Products</Typography>
          <Grid container spacing={2} style={{marginTop:"30px"}}>
            {filteredTasks.map((task, index) => (
              <Grid item xs={12} sm={6} md={3}  key={task.id}>
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
                    <Rating name="half-rating" defaultValue={5} precision={0.5}  />
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

export default Course;
