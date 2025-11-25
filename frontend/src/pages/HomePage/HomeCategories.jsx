import React from "react";
import {CategoriesCard}  from "../../components/CategoriesCard.jsx";
import styles from "../../styles/HomeCategories.module.css"
import streatware from "../../assets/categories/streatware.jpg";
import casual from "../../assets/categories/casual.jpg";
import vintage from "../../assets/categories/vintage.jpg";
import sport from "../../assets/categories/sport.jpg";


export const HomeCategories = () => {
    return (
        <div className={ styles.container }>
            <CategoriesCard text="streatware" img={streatware} alt="streatware"/>
            <CategoriesCard text="casual" img={casual} alt="casual"/>
            <CategoriesCard text="vintage" img={vintage} alt="vintage"/>
            <CategoriesCard text="sport" img={sport} alt="sport"/>
        </div>
    )
}