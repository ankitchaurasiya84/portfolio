import React from 'react';
import './Projects.css';
import img1 from './../assets/textutil.png';
import img2 from './../assets/weather.png';
import img3 from './../assets/amazon.png';
import img4 from './../assets/base64.png';

const Projects = () => {
  const projectList = [
    {
      title: 'Text Util Web App',
      description: 'Enter the text to analyze...',
      image: img1,
      liveLink: 'https://textutil-live-link.com',
      githubLink: 'https://github.com/yourusername/textutil',
    },
    {
      title: 'Weather App',
      description: 'Get weather information for a city.',
      image: img2,
      liveLink: 'https://weatherapp-live-link.com',
      githubLink: 'https://github.com/yourusername/weatherapp',
    },
    {
      title: 'Amazon UI Clone',
      description: 'Clone of Amazon\'s UI.',
      image: img3,
      liveLink: 'https://amazonclone-live-link.com',
      githubLink: 'https://github.com/yourusername/amazonclone',
    },
    {
      title: 'Base64 Encoder',
      description: 'Upload and convert to Base64.',
      image: img4,
      liveLink: 'https://base64encoder-live-link.com',
      githubLink: 'https://github.com/yourusername/base64encoder',
    },
  ];

  return (
    <section className="projects">
      <h3>PROJECTS</h3>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;