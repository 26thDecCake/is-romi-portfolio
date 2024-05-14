// Qualification.tsx
import React from 'react';
import './Qualification.css';

interface Qualification {
  id: number;
  name: string;
}

interface QualificationProps {
  qualifications: Qualification[];
}

const Qualification: React.FC<QualificationProps> = ({ qualifications }) => {
  return (
    <div className="qualifications-section">
      <h2>Qualifications & Licenses</h2>
      <ul className="qualification-list">
        {qualifications.map((qualification) => (
          <li key={qualification.id}>{qualification.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Qualification;
