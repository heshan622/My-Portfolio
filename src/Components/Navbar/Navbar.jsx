import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import sun_icon from '../../assets/sun.svg';
import moon_icon from '../../assets/moon.svg';
import menu_open_icon from '../../assets/menu_open.svg';
import menu_close_icon from '../../assets/menu_close.svg';

const Navbar = ({ theme, toggleTheme }) => { 
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const openMenuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  }

  // Effect to apply styles based on menuOpen state
  useEffect(() => {
    if (menuRef.current) {
        menuRef.current.style.right = menuOpen ? "0" : "-350px";
    }
  }, [menuOpen]);

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
        // If menu is open and click is not inside the menu or on the open button, close the menu
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && openMenuRef.current && !openMenuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]); // Only re-run if menuOpen changes

  return (
    <div id='home' className='navbar'>
      <a href="#home" className="nav-logo-link" onClick={closeMenu}>
        <div className="nav-logo-container">
            <h1>Hesh.</h1>
            <img src={theme_pattern} alt="decorative pattern"/>
        </div>
      </a>
      
      <img ref={openMenuRef} src={menu_open_icon} onClick={toggleMenu} alt="open menu" className='nav-mob-open' />

      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close_icon} onClick={closeMenu} alt="close menu" className="nav-mob-close" />
        <li onClick={closeMenu}><a href="#home">Home</a></li>
        <li onClick={closeMenu}><a href="#about">About Me</a></li>
        <li onClick={closeMenu}><a href="#skills">Skills</a></li>
        <li onClick={closeMenu}><a href="#portfolio">Portfolio</a></li>
        <li onClick={closeMenu}><a href="#contact">Contact</a></li>
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
