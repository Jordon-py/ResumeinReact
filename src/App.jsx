import React, { Suspense } from 'react';
import './styles/App.css';
import './styles/components.css';
const AboutSection     = React.lazy(() => import('./components/AboutSection'));
const ExperienceSection = React.lazy(() => import('./components/ExperienceSection'));
const SkillsSection    = React.lazy(() => import('./components/SkillsSection'));
const ProjectsSection  = React.lazy(() => import('./components/ProjectsSection'));
const EducationSection = React.lazy(() => import('./components/EducationSection'));
const ContactSection   = React.lazy(() => import('./components/ContactSection'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading…</div>}>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}

export default App;
