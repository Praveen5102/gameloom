// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PreviewCards from './components/PreviewCards';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import WebFont from 'webfontloader';

const App = () => {
  useEffect(() => {
    // Animate elements with [data-animation]
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translate3d(0, 0, 0)';
      }, 300);
    });

    // Load Inter font from Google Fonts
    WebFont.load({
      google: {
        families: ['Inter:300,400,500,700'],
      },
    });

    // Set document-level classes
    const docEl = document.documentElement;
    docEl.classList.add('w-mod-js');
    if ('ontouchstart' in window) {
      docEl.classList.add('w-mod-touch');
    }
  }, []);

  return (
    <div className="dark-body" 
    style={{ backgroundColor: '#201c4b',minHeight: '100vh'}}
    >
      <Navbar />
      <HeroSection />
      <PreviewCards />
      <Footer />
      <Cursor />
    </div>
  );
};

export default App;
