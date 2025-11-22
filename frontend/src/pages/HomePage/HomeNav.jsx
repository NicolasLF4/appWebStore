import React from "react";
import '../../styles/HomeNav.css'
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HamburgerMenu } from "../../components/HamburgerMenu";

export const HomeNav = () => {
    return (
        <nav>
            <HamburgerMenu />
            <div className="nav-container">
                {/* Marca o logo */}
                <a href="/" className="logo">
                    <h1>WebStore</h1>
                </a>

                {/* Buscador */}
                <input />

                <div className="icons">
                    {/* Wishlist */}
                    <Heart size={24} className="heart-icon"/>
                    {/* Carrito de compras */}
                    <ShoppingCart size={24} className="cart-icon"/>
                    {/* Perfil o inicio de sesion */}   
                    <UserRound size={24} className="user-icon"/>
                </div>
            </div>
        </nav>
    )
}