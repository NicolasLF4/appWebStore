import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/HomeCarousel.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";

export const HomeCarousel = () => {
    return (
        <div style={{ justifyItems: "center" }}>
            <Carousel style={{ width: "60%"}}>
                <Carousel.Item interval={5000}>
                    <img src={img1} className={ styles.item }/>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img src={img2} className={ styles.item }/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}