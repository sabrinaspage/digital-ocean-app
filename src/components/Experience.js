import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">02.</span> Where I've Worked
        </h2>
        <div className="section-line"></div>
      </div>
      <p className="experience-intro">
        As of August 2022, I am still early in my career, but I think internships are still a valid means of work. Thus, here you will find my technical work experiences: <span className="highlight">https://www.linkedin.com/in/sab-reyes/details/experience/</span>
      </p>
      <div className="experience-container">
        <div className="experience-tabs">
          <button className="tab-button active">Vouch Insurance</button>
          <button className="tab-button">Colombia<br/>University IT</button>
          <button className="tab-button">Beyond<br/>(formerly<br/>Brooklyness)</button>
        </div>
        <div className="experience-content">
          <h3 className="job-title">
            Software Engineer I <span className="at-symbol">@</span> <span className="highlight">Vouch Insurance</span>
          </h3>
          <p className="job-date">June 2021 - Present</p>
          <ul className="job-responsibilities">
            <li>Designing, building, and maintaining full-stack, customer-facing features to power our insurance application and partnership integrations.</li>
            <li>Working on the core front-end infrastructure for our customer experience.</li>
            <li>Collaborating with team members on priorities and technical specifications and assisting in the onboarding of new engineers.</li>
            <li>Participating in brainstorming, retrospectives, sprint planning, and team game times!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

