import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import sun_icon from '../../assets/sun.svg';
import moon_icon from '../../assets/moon.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = ({ theme, toggleTheme }) => { 
  const menuRef = useRef();

  const openMenu = () => {
    if(menuRef.current) menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    if(menuRef.current) menuRef.current.style.right = "-350px";
  }

  const handleMenuClick = (e) => {
    // If the window is mobile-sized, close the menu on link click
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  }

  return (
    <div id='home' className='navbar'>
      <a href="#home" className="nav-logo-link">
        <div className="nav-logo-container">
            <h1>Hesh.</h1>
            <img src={theme_pattern} alt="decorative pattern"/>
        </div>
      </a>
      
      <img src={menu_open} onClick={openMenu} alt="open menu" className='nav-mob-open' />

      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="close menu" className="nav-mob-close" />
        <li onClick={handleMenuClick}><a href="#home">Home</a></li>
        <li onClick={handleMenuClick}><a href="#about">About Me</a></li>
        <li onClick={handleMenuClick}><a href="#skills">Skills</a></li>
        <li onClick={handleMenuClick}><a href="#portfolio">Portfolio</a></li>
        <li onClick={handleMenuClick}><a href="#contact">Contact</a></li>
        <div className="nav-theme-toggle-mobile" onClick={toggleTheme}>
            <p>Switch Theme</p>
            <img src={theme === 'light' ? moon_icon : sun_icon} alt="Toggle Theme" />
        </div>
      </ul>

      <div className="nav-right">
        <a href="#contact" className='nav-connect'>Connect With Me</a>
        <div className="nav-theme-toggle" onClick={toggleTheme}>
            <img src={theme === 'light' ? moon_icon : sun_icon} alt="Toggle Theme" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
