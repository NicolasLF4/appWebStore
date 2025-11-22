import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import '../styles/HomeNav.css'

export const HamburgerMenu = () => {
    
    const [visible, setVisible] = useState(false)
    
    return (
        <div className="hamburger-menu">

            <button onClick={() => setVisible(!visible)}>
                {visible 
                    ? <X size={24} color="#574837"/>
                    : <Menu size={24} color="#574837"/>
                }
            </button>

            {visible
            }
        </div>
    )
}

