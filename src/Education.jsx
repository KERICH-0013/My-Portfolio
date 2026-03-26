import React from 'react';
import './Education.css';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="education-container">
      <div className="top-nav">
        <Link to="/" className="nav-btn">🏠 Home</Link>
        <Link to="/interests" className="nav-btn">❤️ Passions & Interests</Link>
      </div>

      <div className="education-header">
        <h1>Education Journey</h1>
      </div>

      <div className="education-timeline">
        <div className="education-item ongoing">
          <div className="education-status">ONGOING</div>
          <h3>Technical University of Kenya</h3>
          <p>B.Tech in Computer Technology</p>
        </div>

        <div className="education-item completed">
          <div className="education-status">COMPLETED</div>
          <h3>Maseno School</h3>
          <p>Kenya Certificate of Secondary Education</p>
        </div>

        <div className="education-item completed">
          <div className="education-status">COMPLETED</div>
          <h3>Chelsea Academy</h3>
          <p>Primary Education Foundation</p>
        </div>
      </div>
    </div>
  );
};

export default Education;