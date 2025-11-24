import React from "react";
import styles from '../../styles/HomeNav.module.css';
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HamburgerMenu } from "../../components/HamburgerMenu";

export const HomeNav = () => {
    return (
        <nav>
            <HamburgerMenu />
            <div className={ styles["nav-container"]}>
                {/* Marca o logo */}
                <a href="/" className={ styles.logo }>
                    <h1>WebStore</h1>
                </a>

                {/* Buscador */}
                <input placeholder="Busca tu producto, marca, y mas"/>

                <div className={ styles.icons }>
                    {/* Wishlist */}
                    <Heart size={24} className={ styles["heart-icon"]}/>
                    {/* Carrito de compras */}
                    <ShoppingCart size={24} className={ styles["cart-icon"]}/>
                    {/* Perfil o inicio de sesion */}   
                    <UserRound size={24} className={ styles["user-icon"]}/>
                </div>
            </div>
        </nav>
    )
}