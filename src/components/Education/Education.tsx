// Education.tsx
import React from 'react';
import './Education.css';

interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
}

interface EducationProps {
  educations: Education[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educations.map((education) => (
          <div key={education.id} className="education-item">
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <p>{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
