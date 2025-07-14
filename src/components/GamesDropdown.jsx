import React, { useState } from 'react';
import '../styles/games-dropdown.css';

const games = [
  {
    title: 'Mage Quest',
    description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
    link: 'game/mage-quest.html',
    bgImage: 'https://cdn.prod.website-files.com/601a27d15148f684c9c8a023/606ed9681e80dbe5f6641022_Hood%20Small.jpg',
  },
  {
    title: 'Starfleet',
    description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
    link: 'game/starfleet.html',
    bgImage: 'https://cdn.prod.website-files.com/601a27d15148f684c9c8a023/606ed97724a195d7c6d058c0_Spaceship%20small.jpg',
  },
  {
    title: 'Dungeon Runner',
    description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
    link: 'game/dungeon-runner.html',
    bgImage: 'https://cdn.prod.website-files.com/601a27d15148f684c9c8a023/606ed95f0b37504f2dfa2512_Dungeon%20Small.jpg',
  },
];

const GamesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageError = (e) => {
    e.target.style.backgroundImage = `url('https://via.placeholder.com/200x120?text=Image+Not+Available')`;
  };

  return (
    <div className="games-dropdown">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown-icon">▼</span>
        <a href="games.html" className="light-inline-link">Games</a>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          <div className="games-description">
            <h1>Games</h1>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
          </div>
          <div className="games-grid">
            {games.map((game, index) => (
              <a
                key={index}
                href={game.link}
                className="game-card"
                style={{ backgroundImage: `url(${game.bgImage})` }}
                onError={handleImageError}
                onClick={() => setIsOpen(false)}
              >
                <div className="card-overlay">
                  <div className="navbar-text-wrapper">
                    <h4>{game.title}</h4>
                    <p>{game.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesDropdown;