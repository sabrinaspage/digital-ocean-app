import React from "react";
import "../styles/Projects.css";
import FolderIcon from "../icons/FolderIcon";
import GitHubIcon from "../icons/GitHubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

function ProjectCard({ title, description, tech, githubLink, externalLink }) {
  return (
    <div className="project-card">
      <div className="card-header">
        <FolderIcon className="folder-icon" width={48} height={48} />
        {(githubLink || externalLink) && (
          <div className="card-links">
            {githubLink && (
              <a href={githubLink} className="card-link" aria-label="GitHub">
                <GitHubIcon width={24} height={24} />
              </a>
            )}
            {externalLink && (
              <a
                href={externalLink}
                className="card-link"
                aria-label="External Link"
              >
                <ExternalLinkIcon width={24} height={24} />
              </a>
            )}
          </div>
        )}
        {!githubLink && !externalLink && externalLink !== undefined && (
          <a
            href={externalLink || "#"}
            className="card-link"
            aria-label="External Link"
          >
            <ExternalLinkIcon width={24} height={24} />
          </a>
        )}
      </div>
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
      <ul className="card-tech">
        {tech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
