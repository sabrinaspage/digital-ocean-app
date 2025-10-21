import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi stranger! My name is Sabrina. I've been coding for several years now, starting back in college and continuing into my current role at <span href="https://www.vouch.us/" target="_blank" rel="noopener noreferrer" className="highlight">Vouch Insurance</span>.
          </p>
          <p>
            Before studying Computer Science, I was fascinated by the research and exploration side of technology. I'll admit, I didn't quite connect the dots between science and computer science at first — I had no idea programming would play such a big role! Now, coding is one of my favorite activities.
          </p>
          <p>
            My first introduction to coding came way before college: in middle school, on <a href="https://www.neopets.com/" target="_blank" rel="noopener noreferrer" className="highlight">Neopets</a>. Each Neopet had its own customizable HTML "pet page", and I spent hours adding fun designs and styling them with CSS. That's also how I discovered Photoshop, which probably explains why I still enjoy using design tools like Canva today.
          </p>
          <p>
            Neopets may have started as a simple online game, but it's what ignited my love for creating, designing, and ultimately — software engineering.
          </p>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <img src="/selfie.png" alt="Sabrina Reyes" className="profile-image" />
            <div className="image-border"></div>
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

