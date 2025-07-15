// src/components/GamesDropdown.jsx
import React, { useState } from 'react';
import '../styles/games-dropdown.css';

const games = [
  {
    title: 'Mage Quest',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'game/mage-quest.html',
    bgImage:
      'https://cdn.prod.website-files.com/601a27d15148f684c9c8a023/606ed9681e80dbe5f6641022_Hood%20Small.jpg',
  },
  {
    title: 'Starfleet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'game/starfleet.html',
    bgImage:
      'https://cdn.prod.website-files.com/601a27d15148f684c9c8a023/606ed97724a195d7c6d058c0_Spaceship%20small.jpg',
  },
  {
    title: 'Dungeon Runner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'game/dungeon-runner.html',
    bgImage:
      'https://cdn.prod.website-files.com/601a27d15148f684c9c8a023/606ed95f0b37504f2dfa2512_Dungeon%20Small.jpg',
  },
];

const GamesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="games-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="dropdown-toggle">
        <span className="dropdown-icon">▼</span>
        <a href="games.html" className="light-inline-link">Games</a>
      </div>

      {isOpen && (
        <nav className="dark-dropdown-list-close">
          <div className="dropdown-bg-overlay">
            <div className="dropdown-wrapper-full-width">
              <div className="navbar-dropdown-wrapper">
                <div className="navbar-small-container">
                  <h1>Games</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="navbar-large-container">
                  <div className="navbar-cms-list">
                    {games.map((game, index) => (
                      <a
                        key={index}
                        href={game.link}
                        className="navbar-background-image-card"
                        style={{ backgroundImage: `url(${game.bgImage})` }}
                      >
                        <div className="absolute-overlay-navbar">
                          <div className="navbar-text-wrapper">
                            <h4>{game.title}</h4>
                            <p>{game.description}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default GamesDropdown;
