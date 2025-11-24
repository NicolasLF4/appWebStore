import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/HomeCarousel.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";

export const HomeCarousel = () => {
    return (
        // <div style={{ justifyItems: "center" }}>
            <Carousel style={{ width: "100%"}}>
                <Carousel.Item interval={5000}>
                    <div className={ styles.item1 }>
                        <img src={img1}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className={ styles.item1 }>
                        <img src={img2}/>
                    </div>
                </Carousel.Item>
            </Carousel>
        // </div>
    )
}