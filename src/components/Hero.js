import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-intro">Hi, my name is</p>
      <h1 className="hero-title">Sabrina Reyes.</h1>
      <h2 className="hero-subtitle">I build things for the web.</h2>
      <p className="hero-description">
        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
      </p>
      <a href="/resume.pdf" className="btn-outline btn-large" target="_blank" rel="noopener noreferrer">Check out my Resume!</a>
    </section>
  );
}

export default Hero;

