import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/HomeCarousel.module.css";
import cyberM from "../../assets/cybermonday.jpg";
import hotsale from "../../assets/hotsale.jpg";

export const HomeCarousel = () => {
    return (
        <Carousel style={{ width: "100%"}}>
            <Carousel.Item interval={5000}>
                <div className={ styles.item1 }>
                    <img src={cyberM}/>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <div className={ styles.item1 }>
                    <img src={hotsale}/>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}