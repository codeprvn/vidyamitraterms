
import React, { useState, useEffect, useCallback } from "react";
import vidyaLogo from "../../assets/logo.png"
import './Header.css';
import { NavLink } from 'react-router-dom';
import CloseMenu  from "../../assets/x.svg";
import  MenuIcon  from "../../assets/menu.svg";
// import { ReactComponent as Logo } from "../assets/logo.svg";
// import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [companyLogo, setCompanyLogo] = useState('')
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchData = useCallback(() => {
    fetch(`${apiUrl}/admin/getCompanyProfile`)
        .then((res) => res.json())
        .then((data) => {
            document.title = data?.companyProfile?.companyName
        setCompanyLogo(data?.companyProfile?.logo)
        const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = data?.companyProfile?.favIcon
        document.getElementsByTagName('head')[0].appendChild(link);
        })
        .catch((error) => {
        });
}, []);
useEffect(()=>{
    fetchData();},[fetchData])
    


  return (
    <div className="header">
        <div className="logo-container">
          <NavLink to="#">
           <img src={companyLogo ? companyLogo :vidyaLogo} />
          </NavLink>
        </div>
        {/* <div className="logo-nav"> */}
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/about-us">About</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/contact-us">Contact</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
          </li>
        </ul>
      {/* </div> */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
            <img src={CloseMenu} className="menu-icon" alt="close menu" />
        ) : (
          <img src={MenuIcon} className="menu-icon" alt="menu" />
        )}
      </div>
    </div>
  );
};

export default Header;



