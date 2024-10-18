// Home.js
import React from 'react';
import './Home.css';
import profileImage from './image/n.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Hello, I'm Ledjridi Boudjemaa</h1>
          <p>I'm a passionate Frontend Developer focused on crafting clean and user-friendly web experiences.</p>
          <a href="#contact" className="cta-btn">Get in Touch</a>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;
