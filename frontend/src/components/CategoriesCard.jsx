import React from "react";
import styles from "../styles/HomeCategories.module.css"

export const CategoriesCard = ({text, img, alt}) => {
    return (
        <div className={ styles.card }>
            <img src={img} alt={alt}/>  
            <div className={styles.overlay}></div>
            <h5>{text}</h5>
        </div>
    )
}