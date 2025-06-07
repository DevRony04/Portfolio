import React from 'react';
import resumeData from './data';
import './ContentSection.css';
import './Projects.css'; // We'll create this CSS file next

function Projects() {
  const { projects } = resumeData;

  return (
    <div className="content-section">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            {project.type && <p><em>{project.type}</em></p>}
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 