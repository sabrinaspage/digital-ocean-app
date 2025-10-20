import React from "react";
import FeaturedProject from "./FeaturedProject";
import "../styles/Projects.css";

function Projects() {
  const featuredProjects = [
    {
      id: 1,
      label: "Featured Project",
      title: "Robota",
      description: [
        "The Russian invasion of Ukraine has caused the greatest humanitarian crisis in Europe since the Second World War.",
        "Robota supports Ukrainians in finding their next opportunity on their career journey and connects prospective employers with Ukrainian talent."
      ],
      tech: [
        ["Django", "Python", "GCP", "TypeScript", "React"],
        ["Figma", "Netlify", "Bootstrap", "Git"]
      ],
      externalLink: "https://devpost.com/software/robota-bs2pay",
      image: "/robota.png",
      reverse: false
    },
    {
      id: 2,
      label: "Featured Project",
      title: "Futerview",
      description: [
        "Empowering marginalized communities through accessible interview preparation. Sometimes, we need someone to practice interviewing with; however, we might not have a person available at all times.",
        "With Futerview, we are capable of interviewing with an AI that makes practice possible!"
      ],
      tech: [
        ["ReactJS", "ChakraUI", "AssemblyAI", "Firebase", "Netlify"]
      ],
      externalLink: "https://devpost.com/software/futerview-lxowmr",
      image: "/futurview.png",
      reverse: true
    },
    {
      id: 3,
      label: "Featured Project",
      title: "Skript",
      description: [
        "Got distracted by some sudden event? We got your back! Using Skript, you can automatically and manually record snippets of your meetings and lectures without the hassle of going through the entire recording.",
        "Leveraging bleeding-edge technologies & with the power of advanced Machine Learning, users' faces (along with their sentiments) are tracked with user's consent and then synchronously mapped with the transcript of the recorded content to generate accurate time-stamped content that users can go through. In addition, users can directly ask questions to generate relevant answers."
      ],
      tech: [
        ["ReactJS", "MaterialUI", "Netlify", "CockroachDB"]
      ],
      externalLink: "https://devpost.com/software/skript",
      image: "/skript.png",
      reverse: false
    }
  ];

  return (
    <section id="work" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">03.</span> Some Things I've Built
        </h2>
        <div className="section-line"></div>
      </div>
      
      {featuredProjects.map(project => (
        <FeaturedProject key={project.id} {...project} />
      ))}
    </section>
  );
}

export default Projects;

