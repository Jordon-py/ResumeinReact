import React from 'react';
import '../styles/components.css';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'Python',
  'HTML5',
  'CSS3',
  'Git',
  'Linux',
];

const SkillsSection = () => (
  <section
    id="skills"
    className="section skills-section"
    aria-labelledby="skills-title"
  >
    <h2 id="skills-title" className="section-title">
      Skills
    </h2>
    <ul className="skills-list" role="list">
      {skills.map((skill, i) => (
        <li key={i} className="skill-item">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default SkillsSection;
