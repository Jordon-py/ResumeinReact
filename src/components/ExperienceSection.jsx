import React from 'react';
import '../styles/components.css';
import { experiences } from '../data/experiences';

const ExperienceSection = () => (
  <section
    id="experience"
    className="section experience-section"
    aria-labelledby="experience-title"
  >
    <h2 id="experience-title" className="section-title">
      Experience
    </h2>
    {experiences.map((exp, i) => (
      <article key={i} className="experience-item">
        <header>
          <h3 className="experience-role">{exp.role}</h3>
          <p className="experience-company">
            {exp.company} &bull; {exp.location}
          </p>
          <time className="experience-dates">{exp.dates}</time>
        </header>
        <ul className="experience-details" role="list">
          {exp.details.map((d, j) => (
            <li key={j}>{d}</li>
          ))}
        </ul>
      </article>
    ))}
  </section>
);

export default ExperienceSection;
