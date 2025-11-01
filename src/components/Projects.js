import React from "react";
import FeaturedProject from "./FeaturedProject";
import "../styles/Projects.css";
import { featuredProjects } from "../constants/projects";

function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">03.</span> Some Things I've Built
        </h2>
        <div className="section-line"></div>
      </div>

      {featuredProjects.map((project) => (
        <FeaturedProject key={project.id} {...project} />
      ))}
    </section>
  );
}

export default Projects;
