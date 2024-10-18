import React from 'react';
import './About.css';
import profileImage from './image/n.png';  // Adjust the path if needed

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with a focus on creating clean and efficient web applications. 
            With a solid foundation in HTML, CSS, JavaScript, and experience in frameworks like React and Node.js, 
            I am continually pushing my skills forward. I love solving problems and crafting user-friendly interfaces.
          </p>
          <p>
            When I’m not coding, I enjoy learning about new technologies, contributing to open-source projects, 
            and staying updated with the latest trends in web development.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default About;
