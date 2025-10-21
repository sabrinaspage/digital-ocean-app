import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-credit">
        Built by Sabrina Reyes <br/>
        Hosted on <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer" className="highlight">Digital Ocean</a> <br/>
        Designed by <a href="https://bento.me/unji" target="_blank" rel="noopener noreferrer" className="highlight">Nicholas Ikenma</a>
      </p>
    </footer>
  );
}

export default Footer;

