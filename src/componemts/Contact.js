// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through the form or on social media:</p>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="https://www.facebook.com/boudjea.donji/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/boujemmaa_ledjridi/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="ledjridib@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/ledjridi-Boudjemaa19" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;



