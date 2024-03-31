
import React from 'react';
import vidyaLogo from "../../assets/logo.png"
import './Header.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
        <div id="top-header">
            <div id="logo">
                <img src={vidyaLogo} className="logo react" />
            </div>
            <nav>
                <div id="menu">
                    <ul>
                        <li><NavLink to="/">About Us</NavLink></li>
                        <li><NavLink to="/terms-and-conditions">Privacy Policy</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div id="header-image-menu">
    
        </div>
    </header>
  );
};


