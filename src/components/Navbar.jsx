// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css';
import GameDropdown from './GamesDropdown';
import GL_LOGO from '../assets/GL_LOGO.png'; // ✅ Make sure the logo is placed here

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-dark">
      <div className="horizontal-centred-space-between-container">
        <div className="nav-bar-left-container">

          {/* ✅ Logo aligned to far left */}
          <div className="logo-container">
            <a href="/home.html">
              <img src={GL_LOGO} alt="GameLoom Logo" className="navbar-logo" />
            </a>
          </div>

          {/* Games Dropdown (Desktop only) */}
          <div className="game-dropdown desktop dropdown-left-gap">
            <GameDropdown />
          </div>

          {/* Desktop Menu */}
          <nav className="nav-menu desktop">
            <a href="/events.html" className="white-nav-link">Events</a>
            <a href="/media-page.html" className="white-nav-link">Media</a>
            <a href="/blog.html" className="white-nav-link">Blog</a>
            <a href="/team.html" className="white-nav-link">Team</a>
          </nav>
        </div>

        <div className="navbar-button-container desktop">
          <a href="/utility-pages/sign-up.html" className="light-button">SIGN UP</a>
          <a href="/utility-pages/login-page.html" className="primary-button">LOG IN</a>
        </div>

        {/* Hamburger */}
        <div className="menu-button" onClick={() => setIsMenuOpen(true)}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="close-button" onClick={() => setIsMenuOpen(false)}>✕</div>
          <div className="mobile-menu-content">
            {/* Games Dropdown (Mobile Only) */}
            <div className="game-dropdown mobile">
              <GameDropdown />
            </div>

            <a href="/events.html" className="white-nav-link">Events</a>
            <a href="/media-page.html" className="white-nav-link">Media</a>
            <a href="/blog.html" className="white-nav-link">Blog</a>
            <a href="/team.html" className="white-nav-link">Team</a>

            <div className="navbar-button-container mobile">
              <a href="/utility-pages/sign-up.html" className="light-button">SIGN UP</a>
              <a href="/utility-pages/login-page.html" className="primary-button">LOG IN</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
