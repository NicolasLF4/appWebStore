import React from "react";
import '../../styles/HomeFooter.css'
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';

export const HomeFooter = () => {
    return (
        <footer>
            <div className="footer-container">
                {/* Marca o logo */}
                <a href="/" className="logo">
                    <h1>WebStore</h1>
                </a>
                {/* sobre nosotros */}
                    <a href="/" className="logo">
                        Sobre Nosotros
                    </a>
                {/* redes sociales*/}
                <div className="links">
                    <Instagram size={24} color=" #574837" />
                    <Github size={24} color=" #574837" />
                </div>
            </div>
        </footer>
    )
}