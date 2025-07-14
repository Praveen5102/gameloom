import React, { useState } from 'react';
import '../styles/Navbar.css';
import GameDropdown from './GamesDropdown.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-dark">
      <div className="horizontal-centred-space-between-container">
        <div className="nav-bar-left-container">
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="navmenu-overflow-wrapper">
              <GameDropdown />
              <a href="/events.html" className="white-nav-link">Events</a>
              <a href="/media-page.html" className="white-nav-link">Media</a>
              <a href="/blog.html" className="white-nav-link">Blog</a>
              <a href="/team.html" className="white-nav-link">Team</a>
            </div>
          </nav>

          <div className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>

        <div className="navbar-button-container desktop">
          <a href="/utility-pages/sign-up.html" className="light-button">SIGN UP</a>
          <div className="button-spacer-20px"></div>
          <a href="/utility-pages/login-page.html" className="primary-button">LOG IN</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
