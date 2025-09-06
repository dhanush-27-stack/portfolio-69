import React from 'react';
import '../styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="edu-container">
        
        <div className="edu-box">
         
          <h3>10<sup>th</sup> Standard</h3>
          <p><strong>Year:</strong> 2019-2020</p>
          <p><strong>CGPA:</strong> 10</p>
          <p><strong>School:</strong> Sri Chaitanya High School, Vijayawada</p>
        </div>

        <div className="edu-box">
          
          <h3>Intermediate</h3>
          <p><strong>Year:</strong> 2020-2022</p>
          <p><strong>Marks:</strong> 715</p>
          <p><strong>College:</strong> Sri Chaitanya Jr College, Vijayawada</p>
        </div>

        <div className="edu-box">
          
          <h3>B.Tech</h3>
          <p><strong>Year:</strong> 2022-2026</p>
          <p><strong>CGPA:</strong> 8.3</p>
          <p><strong>University:</strong> KL University, Guntur</p>
        </div>

      </div>
    </section>
  );
}
