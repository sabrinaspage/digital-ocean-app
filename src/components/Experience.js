import React, { useState } from "react";
import "../styles/Experience.css";
import { allExperiences } from "../constants/experiences";

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const currentExperience = allExperiences[activeTab];

  const extrasStartIndex = allExperiences.findIndex(
    (exp) => exp.category === "Extras"
  );

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">02.</span> Where I've Worked
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="experience-container">
        <div className="experience-tabs">
          <div className="tab-section-label">Jobs</div>
          {allExperiences
            .filter((exp) => exp.category === "Jobs")
            .map((exp, index) => (
              <button
                key={`job-${index}`}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}

          <div className="tab-section-label">Extras</div>
          {allExperiences
            .filter((exp) => exp.category === "Extras")
            .map((exp, index) => (
              <button
                key={`extra-${index}`}
                className={`tab-button ${
                  activeTab === extrasStartIndex + index ? "active" : ""
                }`}
                onClick={() => setActiveTab(extrasStartIndex + index)}
              >
                {exp.company}
              </button>
            ))}
        </div>

        <div key={activeTab} className="experience-content">
          {currentExperience.roles.map((role, index) => (
            <div key={index} className="role-section">
              <h3 className="job-title">
                {role.title} <span className="at-symbol">@</span>{" "}
                <a
                  href={currentExperience.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight company-link"
                >
                  {currentExperience.company}
                </a>
              </h3>
              <p className="job-date">{role.date}</p>
              <ul className="job-responsibilities">
                {role.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
              {currentExperience.techStack && (
                <div className="tech-stack-section">
                  <p className="tech-stack-label">Technologies used:</p>
                  <div className="tech-stack-list">
                    {currentExperience.techStack
                      .split(", ")
                      .map((tech, techIndex) => (
                        <span key={techIndex} className="tech-stack-item">
                          ▸ {tech}
                        </span>
                      ))}
                  </div>
                </div>
              )}
              {index < currentExperience.roles.length - 1 && (
                <div className="role-divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
