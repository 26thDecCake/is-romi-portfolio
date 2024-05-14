// ProjectSection.tsx
import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import  Project  from '../Project/Project';

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
