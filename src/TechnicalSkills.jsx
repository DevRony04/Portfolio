import React from 'react';
import resumeData from './data';
import './ContentSection.css';

function TechnicalSkills() {
  const { technicalSkills } = resumeData;

  return (
    <div className="content-section">
      <h2>TECHNICAL SKILLS</h2>
      <div className="skill-category">
        <h3>Programming Languages & DSA</h3>
        <p>{technicalSkills.programmingLanguages}</p>
      </div>
      <div className="skill-category">
        <h3>Frontend</h3>
        <p>{technicalSkills.frontend}</p>
      </div>
      <div className="skill-category">
        <h3>Backend & Database</h3>
        <p>{technicalSkills.backendDatabase}</p>
      </div>
    </div>
  );
}

export default TechnicalSkills; 