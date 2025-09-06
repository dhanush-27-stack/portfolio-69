import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let's connect! Reach out through any of these platforms:</p>
      <div className="contact-icons">
        <a href="mailto:chagalamarridhanush99@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
          <span>Gmail</span>
        </a>
        <a href="https://www.instagram.com/chagalamarri.dhanush/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/chagalamarri-dhanush-2560a226b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
