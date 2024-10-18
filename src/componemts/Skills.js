// Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p>Here are some of the technologies I've been learning and working with:</p>

      <div className="skills-grid">
        <div className="skill-card">
          <i className="fab fa-react skill-icon"></i>
          <h3>React.js</h3>
          <p>Basic knowledge of React for building dynamic user interfaces, state management, and component-based architecture.</p>
        </div>
        <div className="skill-card">
          <i className="fab fa-node-js skill-icon"></i>
          <h3>Node.js</h3>
          <p>Basic experience with Node.js for building backends, handling APIs, and managing server-side logic.</p>
        </div>
        <div className="skill-card">
          <i className="fab fa-css3-alt skill-icon"></i>
          <h3>CSS</h3>
          <p>Basic knowledge of CSS, including Flexbox, Grid, animations, and responsive design techniques.</p>
        </div>
        <div className="skill-card">
          <i className="fab fa-html5 skill-icon"></i>
          <h3>HTML</h3>
          <p>Solid foundation in HTML for structuring webpages, semantic elements, and web accessibility standards.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
