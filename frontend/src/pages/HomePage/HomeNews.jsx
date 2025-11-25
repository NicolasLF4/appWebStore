import React from "react";
import {ProductCard}  from "../../components/ProductCard.jsx";
import styles from "../../styles/HomeNews.module.css"
import streatware from "../../assets/categories/streatware.jpg";

export const HomeNews = () => {
    return (
        <div className={ styles.container }>
            <ProductCard title="streatware" price={100} img={streatware} alt="streatware"/>
            <ProductCard title="casual" price={100} img={streatware} alt="casual"/>
            <ProductCard title="vintage" price={100} img={streatware} alt="vintage"/>
            <ProductCard title="sport" price={100} img={streatware} alt="sport"/>
        </div>
    )
}