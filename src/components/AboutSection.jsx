// src/components/AboutSection.jsx

import React from 'react';
import '../styles/components.css';

const AboutSection = () => (
  <section
    id="about"
    className="section about-section"
    aria-labelledby="about-title"
  >
    <h1 className="name">Christopher Jordon</h1>
    <h2 id="about-title" className="section-title">
      About
    </h2>
    <p className="about-text">
      I’m a Full Stack Developer certified by General Assembly, with hands‑on expertise
      in React, Node.js, Express, and MongoDB. I design and deploy performant, accessible
      web applications using modern tooling—Vite, custom CSS, and automated testing.
      My background in retail sales has honed my communication, problem‑solving, and
      detail‑oriented skills, which I bring into every sprint and code review.
      Passionate about end‑to‑end solutions, I thrive building clean, maintainable code
      and delivering delightful user experiences.
    </p>
  </section>
);

export default AboutSection;
// src/components/AboutSection.jsx