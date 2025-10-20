import React, { useState } from "react";
import "../styles/Experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Vouch Insurance",
      companyLink: "https://www.vouch.us/",
      roles: [
        {
          title: "Software Engineer",
          date: "June 2021 – Present",
          responsibilities: [
            "Designed and led event-driven automation of broker sales assets using Typescript, Temporal, and AWS S3, increasing revenue by 15% per month",
            "Migrated underwriting and authority rules into a business rule engine, reducing underwriter turnaround times by 20%",
            "Rebuilt Customer Portal in React, serving 1.5k unique users monthly with improved developer workflows and modern best practices"
          ]
        }
      ],
      techStack: "Ruby on Rails, TypeScript, React, MaterialUI, Jest, RSpec, GraphQL, NestJS, Prisma, Temporal, CircleCI, Docker, AWS",
      location: "Remote"
    },
    {
      company: "Columbia University IT",
      companyLink: "https://www.cuit.columbia.edu/",
      roles: [
        {
          title: "Systems Development Intern",
          date: "February 2021 – June 2021",
          responsibilities: [
            "Streamlined system transition by migrating Confluence content into HTML-structured Jira Epics through Python API automation",
            "Contributed to Redivis open-source software to enable transfer of CSV files"
          ]
        }
      ],
      techStack: "Python, SQL, DBVisualizer, MagickMock",
      location: "Remote"
    },
    {
      company: "Beyond",
      companyLink: "https://checkout.ridebeyond.com/",
      roles: [
        {
          title: "Full Stack Developer",
          date: "June 2020 – January 2021",
          responsibilities: [
            "Engineered user interfaces for a business-facing dashboard using Tailwind, React, TypeScript, NextJS",
            "Optimized customer retention by redirecting customers from a Shopify subscription page to Beyond's checkout page using JavaScript"
          ]
        }
      ],
      techStack: "React, TypeScript, Tailwind CSS, NextJS, PostgreSQL, TypeORM, Liquid",
      location: "New York, NY"
    }
  ];

  const currentExperience = experiences[activeTab];

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
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="experience-content">
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
              {index < currentExperience.roles.length - 1 && <div className="role-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
