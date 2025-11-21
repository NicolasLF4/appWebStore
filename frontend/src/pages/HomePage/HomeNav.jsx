import React from "react";
import '../../styles/HomeNav.css'
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';

export const HomeNav = () => {
    return (
        <nav>
            {/* Marca o logo */}
            <a href="/" className="logo">
                <h1>WebStore</h1>
            </a>

            <ul className="nav-links">
                {/* Ofertas */}
                <li className="item">Ofertas</li>
                {/* Productos */}
                <li className="item">
                    Productos
                    <ul className="submenu">
                        <li>Zapatillas</li>
                        <li>Pantalones</li>
                        <li>Remeras</li>
                        <li>Abrigos</li>
                    </ul>
                </li>
                {/* Categorias */}
                <li className="item">
                    Categorias
                    <ul className="submenu">
                        <li>Hombres</li>
                        <li>Mujeres</li>
                        <li>Niños</li>
                    </ul>
                </li>
                {/* Contacto */}
                <li className="item">Contacto</li>
            </ul>

            <div className="icons">
                {/* Buscador */}
                <input />
                {/* Wishlist */}
                <Heart size={24} color="#E7EFF3" className="heart-icon"/>
                {/* Carrito de compras */}
                <ShoppingCart size={24} color="#E7EFF3" className="cart-icon"/>
                {/* Perfil o inicio de sesion */}   
                <UserRound size={24} color="#E7EFF3" className="user-icon"/>
            </div>
        </nav>
    )
}