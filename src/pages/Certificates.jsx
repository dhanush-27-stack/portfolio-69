import React from "react";
import "../styles/Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="cert-section">
      <h2>Certificates</h2>

      <div className="cert-container">
        {/* Salesforce Certificate */}
        <div className="cert-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/69.png`}
            alt="Salesforce Certificate"
            className="cert-image"
          />
          <div className="cert-info">
            <h3>Salesforce Certificate</h3>
            <p>Successfully completed Salesforce certification program.</p>
            <a
              href={`${process.env.PUBLIC_URL}/assets/salesforce.pdf`}
              download
              className="cert-btn"
            >
              Download Certificate PDF
            </a>
          </div>
        </div>

        {/* Automation Anywhere Certificate */}
        <div className="cert-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/88.png`} 
            alt="Automation Anywhere Certificate"
            className="cert-image"
          />
          <div className="cert-info">
            <h3>Automation Anywhere Essentials Developer</h3>
            <p>
              Certified Essentials Automation Professional — Earned on January 9, 2025.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/assets/automation-anywhere.pdf`}
              download
              className="cert-btn"
            >
              Download Certificate PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
