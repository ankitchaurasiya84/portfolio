import React from 'react';
import './Projects.css';

const Projects = () => {
  // Array of project objects with image, live link, and GitHub link
  const projectList = [
    {
      title: 'Text Util Web App',
      description: 'Enter the text to analyze...',
      image: 'path/to/textutil-image.jpg', // Replace with the actual image path
      liveLink: 'https://textutil-live-link.com', // Replace with the actual live link
      githubLink: 'https://github.com/yourusername/textutil', // Replace with the actual GitHub link
    },
    {
      title: 'Weather App',
      description: 'Get weather information for a city.',
      image: 'path/to/weatherapp-image.jpg', // Replace with the actual image path
      liveLink: 'https://weatherapp-live-link.com', // Replace with the actual live link
      githubLink: 'https://github.com/yourusername/weatherapp', // Replace with the actual GitHub link
    },
    {
      title: 'Amazon UI Clone',
      description: 'Clone of Amazon\'s UI.',
      image: 'path/to/amazonclone-image.jpg', // Replace with the actual image path
      liveLink: 'https://amazonclone-live-link.com', // Replace with the actual live link
      githubLink: 'https://github.com/yourusername/amazonclone', // Replace with the actual GitHub link
    },
    {
      title: 'Base64 Encoder',
      description: 'Upload and convert to Base64.',
      image: 'path/to/base64encoder-image.jpg', // Replace with the actual image path
      liveLink: 'https://base64encoder-live-link.com', // Replace with the actual live link
      githubLink: 'https://github.com/yourusername/base64encoder', // Replace with the actual GitHub link
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
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
