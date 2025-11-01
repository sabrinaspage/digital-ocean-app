import React from "react";
import "../styles/Header.css";
import HexagonIcon from "../icons/HexagonIcon";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-hexagon">
          <HexagonIcon width={48} height={48} />
          <span className="logo-text">S</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-menu">
          <a href="#about" className="nav-item">
            <span className="nav-number">01.</span> About
          </a>
          <a href="#experience" className="nav-item">
            <span className="nav-number">02.</span> Experience
          </a>
          <a href="#work" className="nav-item">
            <span className="nav-number">03.</span> Work
          </a>
          <a href="#contact" className="nav-item">
            <span className="nav-number">04.</span> Contact
          </a>
        </div>
        <a href="/resume.pdf" className="btn-outline">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
