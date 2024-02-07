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
            <h4 style={{ color: "white" }}> COMPANY</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>About US</a>
              </li>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Careers</a>
              </li>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none" ,fontSize:"12px"}}>Affiliates</a>
              </li>
              <li>
                <a href="" style={{ color: "white", textDecoration: "none",fontSize:"12px"}}>Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white" }}>Shop</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>New Srrivals</a>
              </li>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Accessories</a>
              </li>
              <li>
                <a href="/Software" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Men</a>
              </li>
              <li>
                <a href="/Analytics" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Women</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white" }}>Support</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="" style={{ color: "white", textDecoration: "none",fontSize:"12px"}}>Privacy Policy</a>
              </li>
              <li>
                <a href="" style={{ color: "white", textDecoration: "none",fontSize:"12px" }}>UOM</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white"}}>Contact-UOM</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
               
                <div>
                  <p style={{ color: "white",fontSize:"11px"}}>
                    1418 RIver drive,Suite 35 Cottonhall CA 9622<br />
                    United State<br />
                    sale@uomo.com <br/>
                    9494949495

                  </p>
                </div>
              </li>
              <li>
              
             
              </li>
              <li>
             
               
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Footer;
