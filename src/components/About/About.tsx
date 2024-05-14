// About.tsx
import React from 'react';
import './About.css'
import { FaEnvelope, FaGithub, FaLinkedin  } from 'react-icons/fa';

const About: React.FC = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="about-section">
      <h2 className='about-lead'>Hello, I'm Romi</h2>
      <p className='about-desc'>I'm a full stack developer with over 4 years of practical experiences in both desktop and web environments.</p>
      <div className="about-socials-link">
        <button className="social-button" onClick={() => openLink("https://www.linkedin.com//in//romi-than")}><FaLinkedin className='social-icon' /></button>
        <button className="social-button" onClick={() => openLink("https://www.github.com//26thDecCake")}><FaGithub className='social-icon' /></button>
        {/* <button className="social-button" onClick={() => openLink("https://www.codepen.io/notsomuchAasB")}><FaCodepen className='social-icon' /></button> */}
        <button className="social-button" onClick={() => openLink("mailto:rromithan@gmail.com")}><FaEnvelope className='social-icon' /></button>
      </div>
    </section>
  );
};

export default About;
