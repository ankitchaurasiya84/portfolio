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
      liveLink: 'https://ankitchaurasiya84.github.io/TextUtils/',
      githubLink: 'https://github.com/yourusername/textutil',
    },
    {
      title: 'Weather App',
      description: 'Get weather information for a city.',
      image: img2,
      liveLink: 'https://ankitchaurasiya84.github.io/weatherwebapp/',
      githubLink: 'https://github.com/yourusername/weatherapp',
    },
    {
      title: 'Amazon UI Clone',
      description: 'Clone of Amazon\'s UI.',
      image: img3,
      liveLink: 'https://ankitchaurasiya84.github.io/amazon-clone/',
      githubLink: 'https://github.com/ankitchaurasiya84/amazon-clone',
    },
    {
      title: 'Base64 Encoder',
      description: 'Upload and convert to Base64.',
      image: img4,
      liveLink: 'https://ankitchaurasiya84.github.io/base64encoder/',
      githubLink: 'https://github.com/ankitchaurasiya84/base64encoder/tree/main',
    },
  ];

  return (
    <section id="projects">
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