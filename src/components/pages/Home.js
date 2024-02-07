  import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import "../styles/HomeStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from "@mui/material";
import Course from "./Manage";
import Component2 from "./Manage2";
import Component3 from "./Manage3";

const Home = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [imageNum, setImageNum] = useState(0);

  const handleSlideChange = (index) => {
    setImageNum(index);
  };

  const handleNextSlide = () => {
    setImageNum((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const handlePrevSlide = () => {
    setImageNum((prevSlide) =>
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );
  };



  const fetchSliderImages = async () => {
    try {
      const response = await axios.get("http://localhost:4001/api/getImages");
      if (response.data.images) {
        const images = response.data.images.map((image) => ({
          url: `http://localhost:4001/uploads/${image.filename}`,
          caption: image.filename,
        }));
        setSliderImages(images);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchSliderImages();
  }, []);

  // Handle loading or error conditions
  if (sliderImages.length === 0) {
    return (
      <Layout>
        <div style={{fontSize:'2rem'}}>(slider is empty please login and upload the image ...)</div>
        <Course />
        <Component2 />
        <Component3 />
        <Component2 />
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="slider-container">
        <SimpleImageSlider
          width={isMobile ? "100%" : "100%"}
          height={isMobile ? 240 : 640}
          images={sliderImages}
          startIndex={imageNum}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={3}
          slideDuration={3}
          style={{ overflow: "hidden" }}
        />
      </div>
      <Course />
      <Component2/>
      <Component3/>
      <Component2/>
    </Layout>
  );
};

export default Home;