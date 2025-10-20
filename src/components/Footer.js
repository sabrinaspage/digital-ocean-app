import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-credit">
        Built by Sabrina Reyes<br/>
        Designed by Nicholas Ikenma
      </p>
      <div className="footer-stats">
        <div className="stat">
          <svg viewBox="0 0 20 20" width="20" height="20">
            <path fill="currentColor" d="M10 1l2.5 6.5L19 8.5l-5.5 4.5L15 20l-5-3.5L5 20l1.5-7L1 8.5l6.5-1L10 1z"/>
          </svg>
          <span>5,209</span>
        </div>
        <div className="stat">
          <svg viewBox="0 0 20 20" width="20" height="20">
            <path fill="currentColor" d="M6 3a3 3 0 0 1 0 6v8h2V9a5 5 0 0 0 5-5V3H6zm8 8a3 3 0 0 1 0 6H6v-2h8a3 3 0 0 0 0-6h-2V3h2a5 5 0 0 1 0 10z"/>
          </svg>
          <span>2,420</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

