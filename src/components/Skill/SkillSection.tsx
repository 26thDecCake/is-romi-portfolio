// SkillsSection.tsx
import React from 'react';
import './SkillSection.css';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  link: string;
}

const SkillSection: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {

  const handleSkillClick = (skillName: string): void => {
    console.log(`Clicked on ${skillName}`);
  }

  return (
    <div className="skills-section">
      <h4>{title}</h4>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} onClick={() => handleSkillClick(skill.name)}>
            <skill.icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
