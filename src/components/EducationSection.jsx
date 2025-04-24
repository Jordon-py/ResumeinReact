import React from 'react';
import '../styles/components.css';

const education = [
  {
    degree: 'Full Stack Software Engineering Certificate',
    institution: 'General Assembly',
    dates: 'Nov 2024 – Mar 2025',
    image: 'Certificate-of-Completion.jpg',
    details: [
      '420 hours of immersive, hands-on coding instruction.',
      'Built REST API projects, responsive UIs, and version-control workflows.',
    ],
  },
  {
    degree: 'Python Basics – Coursera',
    institution: 'Coursera',
    dates: 'January – July 2024',
    image: 'Coursera.jpg',
    details: [
      'Learned the fundamentals of Python programming.',
      'Completed hands-on projects and quizzes.',
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
          <time className="education-dates">{ ed.dates }</time>
          {ed.image && (
            <a
              href={ed.image}
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src={ed.image}
                alt={`${ed.degree} from ${ed.institution}`}
                className="image"
              />
            </a>
          )}
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
