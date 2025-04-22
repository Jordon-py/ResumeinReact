import React from 'react';
import '../styles/components.css';

const education = [
  {
    degree: 'Full Stack Software Engineering Certificate',
    institution: 'General Assembly',
    dates: 'Nov 2024 – Mar 2025',
    details: [
      '420 hours of immersive, hands-on coding instruction.',
      'Built REST API projects, responsive UIs, and version-control workflows.',
    ],
  },
  {
    degree: 'GED – General Studies',
    institution: 'San Bernardino High School, CA',
    dates: '2006 – 2010',
  },
];

const EducationSection = () => (
  <section
    id="education"
    className="section education-section"
    aria-labelledby="education-title"
  >
    <h2 id="education-title" className="section-title">
      Education
    </h2>
    {education.map((ed, i) => (
      <article key={i} className="education-item">
        <header>
          <h3 className="education-degree">{ed.degree}</h3>
          <p className="education-institution">{ed.institution}</p>
          <time className="education-dates">{ed.dates}</time>
        </header>
        {ed.details && (
          <ul className="education-details" role="list">
            {ed.details.map((d, j) => (
              <li key={j}>{d}</li>
            ))}
          </ul>
        )}
      </article>
    ))}
  </section>
);

export default EducationSection;
