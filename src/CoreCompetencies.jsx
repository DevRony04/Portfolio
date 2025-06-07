import React from 'react';
import resumeData from './data';
import './ContentSection.css';

function CoreCompetencies() {
  const { coreCompetencies } = resumeData;

  return (
    <div className="content-section">
      <h2>CORE COMPETENCIES</h2>
      <div className="competency-category">
        <h3>Additional Skills</h3>
        <p>{coreCompetencies.additionalSkills}</p>
      </div>
      <div className="competency-category">
        <h3>Languages</h3>
        <p>{coreCompetencies.languages}</p>
      </div>
    </div>
  );
}

export default CoreCompetencies; 