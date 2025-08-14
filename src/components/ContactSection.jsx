import React from 'react';
import '../styles/components.css';

const ContactSection = () => (
  <section
    id="contact"
    className="section contact-section"
    aria-labelledby="contact-title"
  >
    <h2 id="contact-title" className="section-title">
      Contact
    </h2>
    <address className="contact-details">
      <p>
        <a href="mailto:cjone4all38@gmail.com">
          cjone4all38@gmail.com
        </a>
      </p>
      <p>
        <a href="tel:+17026955288">(702) 695-5288</a>
      </p>
      <p>Las Vegas, NV</p>
      <p>
        <a
          href="https://github.com/Jordon-py"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="www.linkedin.com/in/christopher-jordon-a369092b3"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </address>
  </section>
);

export default ContactSection;
// This code defines a React component that renders a "Contact" section of a portfolio website.