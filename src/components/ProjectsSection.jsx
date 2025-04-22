import React from 'react';
import '../styles/components.css';

const projects = [
  {
    title: 'Resume Website',
    description:
      'Responsive Vite‑React application showcasing a professional resume with custom CSS and accessibility best practices.',
    link: 'https://github.com/Jordon-py/resume-app',
  },
  {
    title: 'CodeArk',
    description:
      'Code snippet manager built with Next.js and React, featuring live previews, version control, and dark/light themes.',
    link: 'https://github.com/Jordon-py/codeark',
  },
  // add more projects as needed
];

const ProjectsSection = () => (
  <section
    id="projects"
    className="section projects-section"
    aria-labelledby="projects-title"
  >
    <h2 id="projects-title" className="section-title">
      Projects
    </h2>
    <div className="projects-grid">
      {projects.map((proj, i) => (
        <article key={i} className="project-item">
          <h3 className="project-title">
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {proj.title}
            </a>
          </h3>
          <p className="project-description">{proj.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
// This code defines a React component that renders a "Projects" section of a portfolio website.