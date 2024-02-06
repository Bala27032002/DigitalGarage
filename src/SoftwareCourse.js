import React from 'react';
import logo from "./images/lea1.png";
import logo1 from "./images/lea2.jpg";
import logo2 from "./images/lea3.jpg";
import logo3 from "./images/lea4.jpg";
import "./styles/HomeStyles.css";

const SoftwareCourse = () => {
  return (
    <>
      <h1 className='head'>LEARN PROGRAMMING LANGUAGES</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-5 mb-5">
            <div className="card">
              <img
                src={logo}
                alt="Image"
                className="card-img-top image-animation"
              />
              <div className="card-body">
                <h5 className="card-title">Java+Selenium</h5>
                <p className="card-text">CERTIFICATE IN Java+Selenium Program </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5">
            <div className="card">
              <img
                src={logo1}
                alt="Image 1"
                className="card-img-top image-animation"
              />
              <div className="card-body">
                <h5 className="card-title">Java+JMeter</h5>
                <p className="card-text">CERTIFICATE IN Java+JMeter Program Course</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5">
            <div className="card">
              <img
                src={logo2}
                alt="Image 2"
                className="card-img-top image-animation"
              />
              <div className="card-body">
                <h5 className="card-title">Java+Tosca</h5>
                <p className="card-text">CERTIFICATE IN

Java+Tosca Program Course.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5">
            <div className="card">
              <img
                src={logo3}
                alt="Image 3"
                className="card-img-top image-animation"
              />
              <div className="card-body">
                <h5 className="card-title">C#+Selenium</h5>
                <p className="card-text">CERTIFICATE IN   C#+  Selenium Program </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareCourse;
