import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import '../styles/HomeNav.css'

export const HamburgerMenu = () => {
    
    const {visible, setVisible} = useState(false)
    
    return (
        <div className="hamburger-menu">
            <Menu onClick={() => setVisible(!visible)} size={24} color="#574837"/>
            {visible ? <Hamburger />
                : <Menu />
            }
        </div>
    )
}

