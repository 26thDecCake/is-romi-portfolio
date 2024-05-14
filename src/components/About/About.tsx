// About.tsx
import React from 'react';
import './About.css'
import { FaEnvelope, FaGithub, FaLinkedin  } from 'react-icons/fa';

const About: React.FC = () => {
  // const openLink = (url: string) => {
  //   window.open(url, '_blank');
  // };

  return (
    <section className="about-section">
      <h2 className='about-lead'>Hello, I'm Romi</h2>
      <p className='about-desc'>A full stack developer with over 4 years of practical experiences at industry-driven company developing in-house applications in both desktop and web environment.<br />My most prominent full stack projects would be IT Administration System & Employee Self-Service WebApp.</p>
      <div className="about-socials-link">
        <a href="https://www.linkedin.com/in/romi-than" target='_blank' rel="noopener noreferrer">
          <button className="social-button"><FaLinkedin className='social-icon' /></button>
        </a>
        <a href="https://www.github.com/26thDecCake" target='_blank' rel="noopener noreferrer">
          <button className="social-button"><FaGithub className='social-icon' /></button>
        </a>
        <a href="mailto:rromithan@gmail.com" target='_blank' rel="noopener noreferrer">
          <button className="social-button"><FaEnvelope className='social-icon' /></button>
        </a>
      </div>
    </section>
  );
};

export default About;
