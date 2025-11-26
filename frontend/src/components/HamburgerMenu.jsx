import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import styles from '../styles/HomeNav.module.css';

export const HamburgerMenu = () => {
    
    const [visible, setVisible] = useState(false)
    
    return (
        <div>

            <button className={ styles["hamburger-menu"] } onClick={() => setVisible(!visible)}>
                {visible 
                    ? <X size={24} color="#574837"/>
                    : <Menu size={24} color="#574837"/>
                }
            </button>

            {visible
                ? <div className={ styles["toggle-menu"] }>
                    <ul className={ styles["nav-links"] }>
                        {/* Ofertas */}
                        <li className={ styles.item }>Ofertas</li>
                        {/* Productos */}
                        <li className={ styles.item }>
                            Productos
                            <ul className={ styles.submenu }>
                                <li>Zapatillas</li>
                                <li>Pantalones</li>
                                <li>Remeras</li>
                                <li>Abrigos</li>
                            </ul>
                        </li>
                        {/* Categorias */}
                        <li className={ styles.item }>
                            Categorias
                            <ul className={ styles.submenu }>
                                <li>Hombres</li>
                                <li>Mujeres</li>
                                <li>Niños</li>
                            </ul>
                        </li>
                        {/* Contacto */}
                        <li className={ styles.item }>Contacto</li>
                    </ul>
                </div>
                : null
            }
        </div>
    )
}

