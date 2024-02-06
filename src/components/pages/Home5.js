import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import logo from "../images/about10.jpeg";
import "../styles/HomeStyles.css";
const Home5 = () => {
  return (

      <Container maxWidth="xl mt-5">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
          <Box>
              <img src={logo} alt="About Banner" style={{ width: "100%" ,borderRadius:"30px"}}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            

            <Box sx={{ p: 5,marginTop: "1.6rem" }}>
            <h1 style={{textAlign:"center",color:"orangered",fontSize:"50px",fontWeight:"800"}}>WE SMARTCLIFF...</h1>

              <Typography variant="body1"sx={{fontSize:"20px",fontFamily:"sans-serif",textAlign:"justify"}}  >
                A purpose-built global career mobility solutions company transforming individual professionals and enterprise work-force by addressing the digital skills gap, train and empower them to forge a dream career path into future tech. From our perspective, the need for reskilling and upskilling opportunities has never been higher. No matter the times career growth is key for people and the most exciting thing is to train the talent that the university does not cultivate, but that industry needs.
              </Typography>
   
              <a href="http://localhost:3000/about"  class="btn-flip"  data-back="CLICK" data-front="KNOW MORE" style={{marginTop:"20px"}}>KNOW MORE </a>

            </Box>
          </Grid>
        </Grid>
      </Container>

  );
};

export default Home5;
