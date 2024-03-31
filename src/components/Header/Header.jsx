import React from 'react';
import vidyaLogo from "../../assets/state-mgmt.png"
import './Header.css';

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
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div id="header-image-menu">
    
        </div>
    </header>
  );
};


