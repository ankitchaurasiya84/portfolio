import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Ankit Chaurasiya</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="https://github.com/ankitchaurasiya84" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;