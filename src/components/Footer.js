import React from 'react';
import './Footer.css';
import { FaGithub, FaTwitter, FaFacebookF, FaLinkedin, FaYoutube, FaTwitch, FaInstagram, FaSnapchatGhost, FaTiktok, FaCircle, FaStrava } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright © Ankit Chaurasiya |  
        <a href="https://www.linkedin.com/in/ankitchaurasiya84/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.strava.com/athletes/147001532" target="_blank" rel="noopener noreferrer">
          <FaStrava /> Strava
        </a>
      </p>
    </footer>
  );
};

export default Footer;