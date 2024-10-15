import React from 'react';
import './AboutMe.css'; // Ensure you have this CSS file
const profileImage = require('./../assets/ankitsAvatar.jpg'); // Update the path to your profile image
const techIcon1 = require('./../assets/javascript.gif'); // Update the path to your first technology icon
const techIcon2 = require('./../assets/mondoDB.png'); // Update the path to your second technology icon
const techIcon3 = require('./../assets/html.png'); // Update the path to your third technology icon

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="about-content">
          <p>
            Hi :) I'm Ankit Chaurasiya. Full Stack Developer :) I'm working with front-end technologies like JavaScript, React.
          </p>
        </div>
      </div>

      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="tech-icons">
          <img src={techIcon1} alt="JavaScript" className="tech-icon" />
          <img src={techIcon2} alt="MongoDB" className="tech-icon" />
          <img src={techIcon3} alt="HTML" className="tech-icon" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;