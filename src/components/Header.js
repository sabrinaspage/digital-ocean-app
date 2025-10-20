import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-hexagon">
          <svg viewBox="0 0 48 48">
            <polygon points="24,4 41,14 41,34 24,44 7,34 7,14" fill="none" stroke="#8DE9FF" strokeWidth="2"/>
          </svg>
          <span className="logo-text">S</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-menu">
          <a href="#about" className="nav-item"><span className="nav-number">01.</span> About</a>
          <a href="#experience" className="nav-item"><span className="nav-number">02.</span> Experience</a>
          <a href="#work" className="nav-item"><span className="nav-number">03.</span> Work</a>
          <a href="#contact" className="nav-item"><span className="nav-number">04.</span> Contact</a>
        </div>
        <a href="/resume.pdf" className="btn-outline">Resume</a>
      </nav>
    </header>
  );
}

export default Header;

