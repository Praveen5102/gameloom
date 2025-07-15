// src/components/HeroSection.jsx
import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner-wrapper">
        <div className="section-header vertical">
          <h1>
            Welcometo
            <br />
            GameLoom
          </h1>
          <p>
            GameLoom is the fastest way to build and deploy gaming / archviz applications and related websites.
            Rapidly clone from our library of production quality game development components and build your
            application in hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
