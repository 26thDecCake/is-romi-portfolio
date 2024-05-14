// NavBar.tsx
import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="name">Romi</div>
        <div className="role">Full Stack Dev</div>
      </div>
      <div className="right-section">
        <a href="#about">About</a>
        <a href="#stack">Stack</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
