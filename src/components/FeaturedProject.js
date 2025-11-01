import React from "react";
import "../styles/Projects.css";
import GitHubIcon from "../icons/GitHubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

function FeaturedProject({
  label,
  title,
  description,
  tech,
  githubLink,
  externalLink,
  reverse,
  image,
}) {
  return (
    <div
      className={`featured-project ${
        reverse ? "featured-project-reverse" : ""
      }`}
    >
      <div
        className={`project-image ${
          reverse ? "project-image-right" : "project-image-left"
        }`}
      >
        {image && <img src={image} alt={title} />}
      </div>
      <div
        className={`project-content ${
          reverse ? "project-content-left" : "project-content-right"
        }`}
      >
        <p className="project-label">{label}</p>
        <h3 className="project-title">{title}</h3>
        <div className="project-description">
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        {tech.map((techRow, index) => (
          <ul key={index} className="project-tech">
            {techRow.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ))}
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} aria-label="GitHub">
              <GitHubIcon width={24} height={24} />
            </a>
          )}
          {externalLink && (
            <a href={externalLink} aria-label="External Link">
              <ExternalLinkIcon width={24} height={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
