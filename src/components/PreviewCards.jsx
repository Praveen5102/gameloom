// src/components/PreviewSection.jsx
import React from 'react';
import '../styles/preview.css';

const previews = [
  {
    title: 'Dark Version',
    logo: 'https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/60cc626e9fee237f63b6d591_Logo Imverse.png',
    previewImg: 'https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/60cc7ab546fc80686f8b0d9a_Dark Preview.jpeg',
    href: 'home.html'
  },
  {
    title: 'Light Version',
    logo: 'https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/60cc626e9fee237f63b6d591_Logo Imverse.png',
    previewImg: 'https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/60cc6d96e50f532fba9d5275_Light Preview.jpeg',
    href: 'light-option/home.html'
  }
];

const PreviewSection = () => {
  return (
    <div className="horizontal-space-between-container">
      {previews.map((preview, i) => (
        <div className="preview-container" key={i}>
          <div className={i === 0 ? 'dark-colour-card' : 'primary-colour-card'}>
            <img src={preview.logo} alt="Logo" className="utility-logo" />
            <h2>{preview.title}</h2>
            <div className="preview-wrapper">
              <img src={preview.previewImg} alt={`${preview.title} Preview`} className="preview-image" />
            </div>
            <a href={preview.href} className="white-button w-inline-block">
              <div>EXPLORE</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewSection;
