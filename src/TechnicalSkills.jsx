import React from 'react';
import resumeData from './data';
import './ContentSection.css';

function TechnicalSkills() {
  const { technicalSkills } = resumeData;

  return (
    <div className="content-section">
      <h2>TECHNICAL SKILLS</h2>
      <div className="skill-category">
        <h3>Languages</h3>
        <p>{technicalSkills.Languages}</p>
      </div>
      <div className="skill-category">
        <h3>Libraries & Frameworks</h3>
        <p>{technicalSkills.LibrariesFrameworks}</p>
      </div>
      <div className="skill-category">
        <h3>Tools & Software</h3>
        <p>{technicalSkills.ToolsAndSoftware}</p>
      </div>
      <div className="skill-category">
        <h3>Database</h3>
        <p>{technicalSkills.Database}</p>
      </div>
      <div className="skill-category">
        <h3>AI Fields</h3>
        <p>{technicalSkills.AIFields}</p>
      </div>
      <div className="skill-category">
        <h3>Subjects</h3>
        <p>{technicalSkills.Subjects}</p>
      </div>
    </div>
  );
}

export default TechnicalSkills; 