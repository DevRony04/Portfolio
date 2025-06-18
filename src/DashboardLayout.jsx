import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import resumeData from './data';
import './DashboardLayout.css'; // We'll create this CSS file next

function DashboardLayout() {
  const { personalInfo } = resumeData;

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile-header">
          <h2>{personalInfo.name}</h2>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.email}</p>
          <div className="social-links">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li><NavLink to="/" end>Summary</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/education">Education</NavLink></li>
            <li><NavLink to="/competencies">Competencies</NavLink></li>
            <li><NavLink to="/certification">Certification</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="content-area">
        <Outlet /> {/* This is where nested routes will render */}
      </main>
    </div>
  );
}

export default DashboardLayout; 