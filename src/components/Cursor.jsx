
import React, { useEffect } from 'react';
import '../styles/cursor.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-wrapper');
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="cursor">
      <div className="cursor-wrapper">
        <img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/60784fd17de0dc73aa40508d_Cursor White.svg" alt="Cursor" className="cursor-image" />
      </div>
    </div>
  );
};

export default Cursor;
