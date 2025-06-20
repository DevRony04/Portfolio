import React from 'react';
import resumeData from './data';
import './ContentSection.css';

function Certification() {
  const { certificates } = resumeData;
  if (!certificates || certificates.length === 0) return null;

  return (
    <div className="content-section">
      <h2>CERTIFICATES</h2>
      {certificates.map((cert, idx) => (
        <div className="certificate-card" key={idx}>
          <h3>{cert.title}</h3>
          <p><strong>Issuer:</strong> {cert.issuer}</p>
          <p><strong>Date:</strong> {cert.date}</p>
          <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
          <div style={{ marginTop: '15px' }}>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certification;