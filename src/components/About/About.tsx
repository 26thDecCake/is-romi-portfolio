import React from 'react';
import './About.css'
import { FaCodepen, FaEnvelope, FaGithub, FaLinkedin  } from 'react-icons/fa';

const About: React.FC = () => {
  
  return (
    <div className="about">
      <h2 className='about-lead'>Hello, I'm <span className='custom-color'>Romi</span></h2>
      <p className='about-desc'>A <span className='custom-color'>full-stack developer</span> with practical experiences at industry-driven company. I developed in-house applications in both <span className='custom-color'>desktop</span> and <span className='custom-color'>web</span> environment.<br />My most prominent full stack projects would be IT Administration System, Employee Self-Service Web App & Online Recruitment Web App.</p>
      <div className="about-socials-link">
        <a href="https://www.linkedin.com/in/romi-than"
          target='_blank' rel="noopener noreferrer"
          className='socials-link-button-container'>
          <button className="socials-button"><FaLinkedin className='socials-icon glitch' /></button>
        </a>
        <a href="https://www.github.com/26thDecCake"
          target='_blank' rel="noopener noreferrer"
          className='socials-link-button-container'>
          <button className="socials-button"><FaGithub className='socials-icon glitch' /></button>
        </a>
        <a href="https://codepen.io/notsomuchAasB"
          target='_blank' rel="noopener noreferrer"
          className='socials-link-button-container'>
          <button className="socials-button"><FaCodepen className='socials-icon glitch' /></button>
        </a>
        <a href="mailto:rromithan@gmail.com"
          target='_blank' rel="noopener noreferrer"
          className='socials-link-button-container'>
          <button className="socials-button"><FaEnvelope className='socials-icon glitch' /></button>
        </a>
      </div>
    </div>
  );
};

export default About;
