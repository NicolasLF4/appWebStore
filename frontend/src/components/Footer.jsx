import React from "react";
import styles from '../styles/HomeFooter.module.css';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';

export const HomeFooter = () => {
    return (
        <footer>
            <div className={ styles["footer-container"] }>
                {/* Marca o logo */}
                <a href="/" className={ styles.logo }>
                    <h1>WebStore</h1>
                </a>
                {/* sobre nosotros */}
                    <a href="/" className={ styles.logo }>
                        Sobre Nosotros
                    </a>
                {/* redes sociales*/}
                <div className={ styles.links }>
                    <Instagram size={24} color=" #574837" />
                    <Github size={24} color=" #574837" />
                </div>
            </div>
        </footer>
    )
}