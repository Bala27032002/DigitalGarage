import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";
import logo from "../images/download.png";

const Footer = () => {
  const containerStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  
    backgroundColor:"#136330",  
    overflow:"hidden",
    
    zIndex: -1
  };
  return (
    <div style={containerStyle} className="mt-5 " >
       <div style={{ color: "lightorange", padding: "10px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          <div>
            <h4 style={{ color: "white" }}>Quick Links</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/Home" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Home</a>
              </li>
              <li>
                <a href="/About" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>About</a>
              </li>
              <li>
                <a href="/Enquirey" style={{ color: "white", textDecoration: "none" ,fontSize:"12px"}}>Enquiry</a>
              </li>
              <li>
                <a href="http://localhost:3000/menu" style={{ color: "white", textDecoration: "none",fontSize:"12px"}}>Gallery</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white" }}>Programs</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/Programming" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>software deevelopment</a>
              </li>
              <li>
                <a href="/Embedded" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Automotive embedded</a>
              </li>
              <li>
                <a href="/Software" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Testing Track</a>
              </li>
              <li>
                <a href="/Analytics" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Mechanical design</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white" }}>Support</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="https://smartcliff.in/terms-and-conditions" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="https://smartcliff.in/privacy-policy" style={{ color: "white", textDecoration: "none",fontSize:"12px"}}>Privacy Policy</a>
              </li>
              <li>
                <a href="https://smartcliff.in/faq" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Faq's</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white"}}>Contact</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <div>
                <a href="https://goo.gl/maps/RkWK9Zc3LRYLPM8e6" target="blank">  <img src="https://smartcliff.in/assets/images/location.png" alt="Location" /> </a>
                </div>
                <div>
                  <p style={{ color: "white",fontSize:"11px"}}>
                    2000, Krishna Colony (opp. to Central Studio)<br />
                    Ramanathapuram, Trichy Road<br />
                    Coimbatore - 641 005
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://smartcliff.in/assets/images/mail.png" alt="Mail" />
                </div>
                <div>
                  <a href="mailto:enquiry@smartcliff.in" style={{ color: "white", textDecoration: "none",fontSize:"12px"}}>enquiry@smartcliff.in</a>
                </div>
              </li>
              <li>
                <div>
                  <img src="https://smartcliff.in/assets/images/phone.png" alt="Phone" />
                </div>
                <div>
                  <a href="tel:+91 811 007 7033" style={{ color: "white", textDecoration: "none",fontSize:"12px"}}>+91 811 007 7033</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Footer;
