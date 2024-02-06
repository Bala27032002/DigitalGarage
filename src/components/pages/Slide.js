import React from "react";
import Slider from 'react-slick';

import "../styles/HomeStyles.css";
import { Avatar } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// PreviousBtn and NextBtn components
const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIosIcon style={{ fontSize: "30px" }} /> {/* Corrected the style property name */}
        </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIosIcon style={{ fontSize: "30px" }} /> {/* Corrected the style property name */}
        </div>
    );
};

const Testimonial = () => {
    return (
        <>
            <div className="testimonial" style={{ marginTop: "150px" }}>
                <h2 className="primary-heading">Review by Our Trainers</h2>
                <div className="testimonial-container" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <div style={{ width: "50%" }}>
                        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                            <Card 
                                img="https://tse1.mm.bing.net/th?id=OIP.PlmU4CkadPFONP2jfjfSLwHaHa&pid=Api&P=0&h=180"
                                content="I have learned a lot from their teaching and guidance. Their expertise, patience, and dedication have made a significant difference in my understanding and progress. "
                                author="cetti"
                                role="Software Engineer"
                            />
                            <Card
                                img="https://tse2.mm.bing.net/th?id=OIP.AO7CYidxhJtWlO1KJBnbtgHaHa&pid=Api&P=0&h=180"
                                content="explain concepts and provide real-world examples has greatly enhanced my learning experience."
                                author="Jane Smith"
                                role="UX Designer"
                            />
                            <Card
                                img="https://tse3.mm.bing.net/th?id=OIP.0B-priVPxdPQBd5wkiVkYgAAAA&pid=Api&P=0&h=180"
                                content="I highly recommend learning from them."
                                author="Mike Johnson"
                                role="Project Manager"
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

const Card = ({ img, content, author, role }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", color: "gray" }}>
            <Avatar src={img} style={{ width: "120px", height: "120px", border: "1px solid lightgray", padding: "7px" }} />
            <p>{content}</p>
            <p style={{ fontStyle: "italic", marginTop: "5px" }}>
                <span style={{ fontWeight: "500", color: "orange" }}>{author}</span>, {role}
            </p>
        </div>
    );
};

export default Testimonial;