import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/HomeStyles.css";
import JavaImage from "../images/java2.png";
import NetFullStackImage from "../images/language2.jpg";
import PythonImage from "../images/language3.jpg";
import Data from "../../Data.json"

const cardData = [
  {
    image: JavaImage,
    title: "java",
    description: "Using Java, fundamental data types to advanced programming structures. You will learn Core Java, Angular JS, Spring MVC.",
    link: "/java"
  },
  {
    image: NetFullStackImage,
    title: ".Net Full Stack",
    description: "The .NET Course offered is a comprehensive introduction to the .NET space and .NET coding using C#.",
    link: "/NetFullStack"
  },
  {
    image: PythonImage,
    title: "Python programming",
    description: "Master Python from the inside out and learn how to build any Python program with ease using Python classes and OOP.",
    link: "/python"
  }
];

const ExampleComponent = () => {
  return (
    <>
      <h1 className='head'>LEARN SOFTWARE DEVELOPMENT</h1>
      <div className="container mt-5">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card">
                <img
                  src={card.image}
                  alt={`Image ${index + 1}`}
                  style={{ height: "300px" }}
                  className="card-img-top image-animation"
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <Link to={card.link}>
                    <button className="btn btn-primary">Discover</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExampleComponent;
