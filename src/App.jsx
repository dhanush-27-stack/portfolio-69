import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './styles/Navbar.css';
import './styles/Footer.css';

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} Chagalamarri Dhanush</div>
          <div className="socials">
            <a href="https://www.instagram.com/chagalamarri.dhanush/" aria-label="instagram">Instagram</a>
            <a href="https://www.linkedin.com/in/chagalamarri-dhanush-2560a226b/" aria-label="linkedin">LinkedIn</a>
            <a href="mailto:chagalamarridhanush99@gmail.com" aria-label="gmail">Gmail</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
