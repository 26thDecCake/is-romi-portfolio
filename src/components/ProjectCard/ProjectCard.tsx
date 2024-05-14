// ProjectCard.tsx
import React, { useState } from 'react';
import './ProjectCard.css';
import  Project  from '../Project/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`project-card ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {expanded && (
        <div className="details">
          <h4>Technologies Used:</h4>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <p>Platform: {project.platform}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
