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
            Hi stranger! My name is Sabrina. I have been coding for several years now, starting in college and now at my job at <span className="highlight">Vouch Insurance</span>.
          </p>
          <p>
            Before entering Computer Science, I loved the research and exploration aspects of technology, but I actually didn't connect the dots between science and computer science. I didn't know there would be programming! The irony now is, I code all the time now! You know why? Because I absolutely adore this field.
          </p>
          <p>
            I was first introduced to coding not in college, but in middle school when I was on <span className="highlight">Neopets</span>. You would have an account and own up to four Neopets. You could build an HTML page on each Neopet's pet page and add all sorts of fun stuff with CSS. Neopets is what introduced me to PhotoShop too, which explains why I love graphic design platforms like Canva so much!
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

