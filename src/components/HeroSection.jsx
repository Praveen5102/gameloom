import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div
        className="section-header vertical"
        data-w-id="4323a3ed-216b-7790-e30e-7ff7519ae487"
        style={{
          transform:
            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          opacity: 1,
          transformStyle: 'preserve-3d',
        }}
      >
        <h1>
          Welcome to
          <br />
          GameLoom
          <br />
        </h1>
        <p>
          GameLoom is the fastest way to build and deploy gaming / archviz applications and related websites.
          Rapidly clone from our library of production quality game development components and build your
          application in hours.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
