import React from 'react';
import resumeData from './data';
import './ContentSection.css';

function Education() {
  const { education } = resumeData;

  return (
    <div className="content-section">
      <h2>EDUCATION</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <p>{edu.years}</p>
          <p>{edu.institution}</p>
          <p>{edu.grade}</p>
        </div>
      ))}
    </div>
  );
}

export default Education; 