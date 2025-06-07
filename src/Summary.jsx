import React from 'react';
import resumeData from './data';
import './ContentSection.css'; // General styling for content sections

function Summary() {
  return (
    <div className="content-section">
      <h2>PROFESSIONAL SUMMARY</h2>
      <p>{resumeData.summary}</p>
    </div>
  );
}

export default Summary; 