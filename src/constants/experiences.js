import React from "react";

export const allExperiences = [
  {
    category: "Jobs",
    company: "Vouch Insurance",
    companyLink: "https://www.vouch.us/",
    roles: [
      {
        title: "Software Engineer",
        date: "June 2021 - Present (listing some amongst many projects)",
        responsibilities: [
          "Designed and led the development of an event-driven document generation system using TypeScript, Temporal, and AWS S3. What used to take the sales team an hour per quote now takes under a minute, helping them focus on delivering key quote information to brokers instead of building PowerPoint decks",
          "Migrated underwriting rules, authority rules and form attachment logic into a business rule engine, reducing underwriter turnaround times by 20%. This shift allows the team to focus on complex, high-value cases",
          "Launched a self-service forms service built with NestJS, Prisma, and OpenAPI, enabling the Insurance Innovation team to manage and deploy form templates without relying on engineering",
          "Modernized Vouch's customer experience, rebuilding the Customer Portal in React (from Vue), where GraphQL served as the query language for our backend and MaterialUI as our component library",
        ],
      },
    ],
    techStack:
      "TypeScript, React, MaterialUI, NestJS, Prisma, Ruby on Rails, Cursor, Warp, Temporal, AWS, CircleCI, Postman, Bruno, Nomad, Docker, Datadog, LogRocket, GraphQL",
    location: "Remote",
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
          "Contributed to Redivis open-source software to enable transfer of CSV files",
        ],
      },
    ],
    techStack: "Python, SQL, DBVisualizer, MagickMock",
    location: "Remote",
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
          "Designed and developed a customer request form in TypeScript and React collect and manage scooter purchase, repair, and upgrade requests. Leveraged an airtable backend and the Formik library",
          "Optimized customer retention by redirecting customers from a Shopify subscription page to Beyond's checkout page using JavaScript",
        ],
      },
    ],
    techStack:
      "React, TypeScript, Tailwind CSS, NextJS, PostgreSQL, TypeORM, Liquid",
    location: "New York, NY",
  },
  {
    category: "Extras",
    company: "The Ethical Tech Project",
    companyLink: "https://www.ethicaltechproject.org/",
    roles: [
      {
        title: "Fellow",
        date: "April 2025 - June 2025",
        responsibilities: [
          "Engaged with early career professionals on ethical AI principles through readings and discussions",
        ],
      },
    ],
    location: "Hybrid",
  },
  {
    category: "Extras",
    company: "CodeDay",
    companyLink: "https://www.codeday.org/",
    roles: [
      {
        title: "Mentor",
        date: "July 2023 - August 2023",
        responsibilities: [
          <>
            Guided two college students learning React, NodeJS, TypeScript and
            various Cloud APIs through the process of contributing to the{" "}
            <a
              href="https://github.com/faisalsayed10/firefiles"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              Firefiles
            </a>{" "}
            open-source application. Supported for seven weeks.
          </>,
        ],
      },
    ],
    location: "New York, NY",
  },
  {
    category: "Extras",
    company: "Out In Tech",
    companyLink: "https://outintech.com/",
    roles: [
      {
        title: "Mentee",
        date: "April 2023 - June 2023",
        responsibilities: [
          "Designed and built a REST microservice that streamlines landlord-tenant communication by tracking maintenance requests and tenant needs in apartment housing",
          "Received system design and collaboration mentorship under the guidance of Elisa Valdez de Ramírez",
        ],
      },
    ],
    techStack: "TypeScript, NextJS, PostgreSQL, DBeaver, PgAdmin 4",
    location: "Remote",
  },
  {
    category: "Extras",
    company: "CreAItivity",
    companyLink:
      "https://media.licdn.com/dms/image/v2/C4D2DAQGYh0XQDKoqtQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1620081654771?e=1762574400&v=beta&t=Rsq-qMKyaLtEzqObyiLdMtdrsxlEA7MHlYzvdIK5U8A",
    roles: [
      {
        title: "Fellow",
        date: "March 2021 - April 2021",
        responsibilities: [
          "Won People's Choice in one of 16 cohorts",
          "Coordinated in a cohort ages 13-21 to conduct research and develop a Twitter bot to educate social media users about the spread of misinformation on social networking platforms",
          "Attended weekly workshops led by industry and academic professionals to learn about algorithmic bias and human interaction with AI",
        ],
      },
    ],
    location: "Remote",
  },
];
