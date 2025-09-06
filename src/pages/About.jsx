import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-container">
        {/* Box 1: Personal Information */}
        <div className="about-box personal-info">
          <h3>Personal Information</h3>
          <ul>
            <li><strong>Name:</strong> C. Dhanush</li>
            <li><strong>Date of Birth:</strong> 27-05-2003</li>
            <li><strong>Phone:</strong> 9182942542</li>
            <li><strong>City:</strong> Vijayawada</li>
            <li><strong>Degree:</strong> Undergraduate</li>
            <li><strong>Email:</strong> 2200031739@kluniversity.in</li>
          </ul>
        </div>

        {/* Box 2: About + Tools */}
        <div className="about-box">
          <p>
            Hi, I’m <span className="highlight">Chagalamarri Dhanush</span>, an energetic web developer passionate 
            about building modern, responsive, and creative websites.
            I specialize in <span className="highlight">React</span>, JavaScript, and CSS animations, crafting sleek 
            and functional designs for all devices.
          </p>

          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <ul className="tools-list">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>CSS3 & Animations</li>
              <li>HTML5</li>
              <li>Node.js & Express</li>
              <li>MongoDB</li>
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
