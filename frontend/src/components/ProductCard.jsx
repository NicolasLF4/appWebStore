import React from "react";
import styles from "../styles/HomeNews.module.css"

export const ProductCard = ({title, price, img, alt}) => {
    return (
        <div className={ styles.card }>
            <img src={img} alt={alt}/>  
            <p className={ styles.title }>{title}</p>
            <p className={ styles.price }>${price}</p>
            <button className={ styles.addCart }>añadir al carrito</button>
        </div>
    )
}