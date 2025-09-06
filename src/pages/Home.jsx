import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="fade-in">I design elegant, cutting-edge websites that blend flawless code with captivating animations for an effortless user experience.</h1>
        <p className="fade-in delay-1">
         I turn bold ideas into immersive digital journeys that captivate and connect.
         From crafting pixel-perfect designs from the ground up to refining existing projects, 
         I blend innovation, seamless performance, and meticulous detail to create websites 
         that don’t just function — they inspire.
        </p>
        <a className="btn fade-in delay-2" href="/C.DHANUSH RESUME.pdf" download>
          Download Resume
        </a>
        <div className="scroll-down" aria-label="Scroll Down">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>

      <div className="home-image-container">
        <img src={process.env.PUBLIC_URL + "/assets/pic.jpg"} alt="Profile" />



        <div className="glow-border"></div>
      </div>
    </section>
  );
}
