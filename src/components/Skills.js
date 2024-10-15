import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap ,FaNodeJs} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
    return (
        <section className="skills">
            <h3>SKILLS</h3>
            <div className="skill-set">
                <div className="skill-item">
                    <FaHtml5 className="skill-icon" /> HTML 5
                </div>
                <div className="skill-item">
                    <FaCss3Alt className="skill-icon" /> CSS 3
                </div>
                <div className="skill-item">
                    <FaJs className="skill-icon" /> JavaScript
                </div>
                <div className="skill-item">
                    <FaReact className="skill-icon" /> React JS
                </div>
                <div className="skill-item">
                    <FaBootstrap className="skill-icon" /> Bootstrap
                </div>
                <div className="skill-item">
                    <SiMongodb className="skill-icon" /> MongoDB
                </div>
                <div className="skill-item">
                    <SiExpress className="skill-icon" /> Express JS
                </div>
                <div className="skill-item">
                    <FaNodeJs className="skill-icon" /> Node JS
                </div>
            </div>
        </section>
    );
};

export default Skills;