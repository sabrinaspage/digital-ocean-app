import React from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const featuredProjects = [
    {
      id: 1,
      label: "Featured Project",
      title: "RobotaHQ",
      description: [
        "The Russian invasion of Ukraine has caused the greatest humanitarian crisis in Europe since the Second World War.",
        "Robota supports Ukrainians in finding their next opportunity on their career journey and connects prospective employers with Ukrainian talent."
      ],
      tech: [
        ["Django", "Python", "GCP", "TypeScript", "React"],
        ["Figma", "Netlify", "Bootstrap", "Git"]
      ],
      githubLink: "https://github.com",
      externalLink: "https://example.com",
      reverse: false
    },
    {
      id: 2,
      label: "Featured Project",
      title: "Futurview",
      description: [
        "Empowering marginalized communities through accessible interview preparation. Sometimes, we need someone to practice interviewing with; however, we might not have a person available at all times.",
        "With Futerview, we are capable of interviewing with an AI that makes practice possible!"
      ],
      tech: [
        ["ReactJS", "ChakraUI", "AssemblyAI", "Firebase", "Netlify"]
      ],
      githubLink: "https://github.com",
      externalLink: "https://example.com",
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
      showLearnMore: true,
      reverse: false
    }
  ];

  const otherProjects = [
    {
      id: 1,
      title: "Integrating Algolia Search with WordPress Multisite",
      description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia.",
      tech: ["Algolia", "WordPress", "PHP"],
      externalLink: "#"
    },
    {
      id: 2,
      title: "Time to Have More Fun",
      description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      githubLink: "#",
      externalLink: "#"
    },
    {
      id: 3,
      title: "Building a Headless Mobile App CSS From Scratch",
      description: "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement.",
      tech: ["Node", "Express", "Firebase", "Vue"],
      externalLink: "#"
    },
    {
      id: 4,
      title: "OctoProfile",
      description: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
      tech: ["Next.js", "Chart.js", "GitHub API"],
      githubLink: "#",
      externalLink: "#"
    },
    {
      id: 5,
      title: "Google Keep Clone",
      description: "A simple Google Keep clone built with Vue and Firebase.",
      tech: ["Vue", "Firebase"],
      githubLink: "#",
      externalLink: "#"
    },
    {
      id: 6,
      title: "Apple Music Embeddable Web Player Widget",
      description: "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js. Read more about this project on 9to5Mac.",
      tech: ["MusicKit.js", "JS", "SCSS"],
      externalLink: "#"
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

      <div className="other-projects">
        <h3 className="other-projects-title">Other Noteworthy Projects</h3>
        <a href="#" className="view-archive">view the archive</a>
        
        <div className="projects-grid">
          {otherProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <button className="btn-outline btn-large show-more">Show More</button>
      </div>
    </section>
  );
}

export default Projects;

