import React from "react";
import {CategoriesCard}  from "../../components/CategoriesCard.jsx";
import styles from "../../styles/HomeCategories.module.css"
import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.jpg";

export const HomeCategories = () => {
    return (
        <div className={ styles.container }>
            <CategoriesCard text="hola" img={img1} alt="categoria"/>
            <CategoriesCard text="hola" img={img1} alt="categoria"/>
            <CategoriesCard text="hola" img={img1} alt="categoria"/>
            <CategoriesCard text="hola" img={img1} alt="categoria"/>
        </div>
    )
}