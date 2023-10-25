import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuTitles } from './MenuTitles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import NgocLogo from '../../../images/NgocLogo.png';

library.add(faCaretDown, faBars, faTimes);

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scroll, setScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const showProgressBar = () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const value = (scrollTop / height) * 100;
    setScroll(value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="row nav-area">
        <div className="col logo">
          <a href="/">
            <img id="name-logo" src={NgocLogo} alt="Name Logo" />
          </a>
        </div>
        <div className="col nav-text">
          <nav className="navbar">
            <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'white-icon' : 'black-icon'}`} onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={isMobileMenuOpen ? 'times' : ['fas', 'bars']} />
            </div>
            <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              {MenuTitles.map((menu, index) => (
                <li
                  key={menu.title}
                  className={`navbar-item center ${menu.submenu ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  {menu.submenu ? (
                    <>
                      <span className="navbar-title center">
                        {menu.title} <FontAwesomeIcon icon={['fas', 'caret-down']} />
                      </span>
                      <ul className={`navbar-dropdown ${activeMenu === index ? 'show' : ''}`}>
                        {menu.submenu.map((subMenu) => (
                          <li key={subMenu.title} className="navbar-dropdown-item">
                            <Link to={`/${subMenu.title}`}>{subMenu.display}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={`/${menu.title}`} className="navbar-title">
                      {menu.display}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
