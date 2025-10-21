import React, { useState } from "react";
import "../styles/Experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const allExperiences = [
    {
      category: "Jobs",
      company: "Vouch Insurance",
      companyLink: "https://www.vouch.us/",
      roles: [
        {
          title: "Software Engineer",
          date: "June 2021 - Present",
          responsibilities: [
            "Designed and led event-driven automation of broker sales assets using Typescript, Temporal, and AWS S3, reducing sales team preparation time from 1 hour to under 1 minute",
            "Migrated underwriting and authority rules into a business rule engine, reducing underwriter turnaround times by 20%",
            "Rebuilt Client Portal from VueJS in ReactJS, to this day serving 1.5k unique users monthly with improved developer workflows and modern best practices"
          ]
        }
      ],
      techStack: "Ruby on Rails, TypeScript, React, MaterialUI, Jest, RSpec, GraphQL, NestJS, Prisma, Temporal, CircleCI, Postman, Bruno, Nomad, Cursor, Warp, Docker, Datadog, Sidekiq, LogRocket, AWS",
      location: "Remote"
    },
    {
      category: "Jobs",
      company: "Columbia University IT",
      companyLink: "https://www.cuit.columbia.edu/",
      roles: [
        {
          title: "Systems Development Intern",
          date: "February 2021 - June 2021",
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
      category: "Jobs",
      company: "Beyond",
      companyLink: "https://checkout.ridebeyond.com/",
      roles: [
        {
          title: "Full Stack Developer",
          date: "June 2020 – January 2021",
          responsibilities: [
            "Engineered user interfaces for an internal dashboard using Tailwind, React, TypeScript, NextJS",
            "Optimized customer retention by redirecting customers from a Shopify subscription page to Beyond's checkout page using JavaScript"
          ]
        }
      ],
      techStack: "React, TypeScript, Tailwind CSS, NextJS, PostgreSQL, TypeORM, Liquid",
      location: "New York, NY"
    },
    {
      category: "Extras",
      company: "The Ethical Tech Project",
      companyLink: "https://www.ethicaltechproject.org/",
      roles: [
        {
          title: "Fellow",
          date: "April 2025 – June 2025",
          responsibilities: [
            "Engaged with early career professionals on ethical AI principles through readings and discussions"
          ]
        }
      ],
      location: "Hybrid"
    },
    {
      category: "Extras",
      company: "CodeDay",
      companyLink: "https://www.codeday.org/",
      roles: [
        {
          title: "Mentor",
          date: "July 2023 – August 2023",
          responsibilities: [
            <>Guided two college students learning React, NodeJS, TypeScript and various Cloud APIs through the process of contributing to the <a href="https://github.com/faisalsayed10/firefiles" target="_blank" rel="noopener noreferrer" className="highlight">Firefiles</a> open-source application. Supported for seven weeks.</>
          ]
        }
      ],
      location: "New York, NY"
    },
    {
      category: "Extras",
      company: "Out In Tech",
      companyLink: "https://outintech.com/",
      roles: [
        {
          title: "Mentee",
          date: "April 2023 – June 2023",
          responsibilities: [
            "Designed and built a REST microservice that streamlines landlord-tenant communication by tracking maintenance requests and tenant needs in apartment housing",
            "Received system design and collaboration mentorship under the guidance of Elisa Valdez de Ramírez"
          ]
        }
      ],
      techStack: "TypeScript, NextJS, PostgreSQL, DBeaver, PgAdmin 4",
      location: "Remote"
    }
  ];

  const currentExperience = allExperiences[activeTab];

  // Group experiences by category for rendering tabs with headers
  const extrasStartIndex = allExperiences.findIndex(exp => exp.category === "Extras");

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
          {allExperiences.filter(exp => exp.category === "Jobs").map((exp, index) => (
            <button
              key={`job-${index}`}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </button>
          ))}
          
          <div className="tab-section-label">Extras</div>
          {allExperiences.filter(exp => exp.category === "Extras").map((exp, index) => (
            <button
              key={`extra-${index}`}
              className={`tab-button ${activeTab === (extrasStartIndex + index) ? 'active' : ''}`}
              onClick={() => setActiveTab(extrasStartIndex + index)}
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
              {currentExperience.techStack && (
                <div className="tech-stack-section">
                  <p className="tech-stack-label">Technologies used:</p>
                  <div className="tech-stack-list">
                    {currentExperience.techStack.split(', ').map((tech, techIndex) => (
                      <span key={techIndex} className="tech-stack-item">▸ {tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {index < currentExperience.roles.length - 1 && <div className="role-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
