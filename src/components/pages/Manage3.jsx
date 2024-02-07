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

const Component3 = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const tasksList = [
    {
      id: 1,
      url: "data:image/jpeg;base64,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jvXx3/E7SazxLw4vkNR9D/eV83gxyx4nK+WM1w851NMA9x7dpO0HAAoXJut9OsrM/wDDtm5P3c5x6ZzMen4bqXexyAOyn/YTg9M5darKY2ML6Ibt+0t6jol5LUK+0SbpaREj9Rpd5TX3T057xBKFLxNdzOj1OnuWaPgoY2cCZXHLesUc1z3TeGI7+YcVx39jN8/hg2eRPMKIHqO/yZt9DokThZnd0UFjQAyT7CbzDPX+lpj92k6R8TfeHdvciaHptZGJax5iTQ9zc2SdUyjcBxVD1yBElJK7roWNVX5kuQPC9S1k+ep4bvCNZ0rERNUkREBERAREQEREBERAxNpgkEgWLo1xfNek13WeC6Wo4dwTV2LwcV2z7/IE2sSuWMy7iLJUfpOjTTG1FCj0GBwB/tJESsnpJERJFIlYgavr/DA1suG9Ox/sZoOo6ci1Iojm+07Kajx/SBS+/F+xB5nL5/DLjcp2rlj8uY0tFfxJSgAZkIPUv6fQ1Nc7UBI7two+T/sMzm8epOJyjGMHWdXmlnN+K9WzudNgyBT5lIIY/IOQO89S8J8DTRz9z/5j2+B2+eZI8S8J0dcVqoGrg8EfBGRNv6+Vm7efsm42vK+iU7h6ck/v/KbjpGBYZvbWfXv+Pj2E6E/RWmDaajr7NTf2kjw76V09I/czr6NV3zyKxKf180etTvBgdt9ptJaqgCgOOwl07PHh646Wk0rERNEkREBERAREQEREBERAREQEREBERAREQEpKxA1+p4Ros24oCfk1+11/KTNPTCigAAOABQl8SJjJ1BWIiSEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==",
      description: "Organic fruits-1",
      category: "Category 1",
      duration: 10,
    },
    {
      id: 2,
      url: "https://freshindiaorganics.com/cdn/shop/files/Untitleddesign_14_12eef1de-8530-4b24-bd2e-668f871e6721.png?v=1701772054",
      description: "Organic fruits -2",
      category: "Category 2",
      duration: 20,
    },
    {
      id: 3,
      url: "data:image/jpeg;base64,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",
      description: "Organic fruits -3",
      category: "Category 1",
      duration: 15,
    },
    {
      id: 4,
      url: "https://5.imimg.com/data5/SELLER/Default/2021/7/JF/FD/MX/134774413/exotic-vegitable-delivery-services.jpg",
      description: "Organic fruits -4",
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
