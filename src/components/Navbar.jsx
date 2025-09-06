import React from 'react';

export default function Navbar(){
  const scrollTo = id => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navbar">
      <div className="brand" onClick={()=>scrollTo('home')}>C.Dhanush</div>
      <div className="links">
        <button onClick={()=>scrollTo('home')}>Home</button>
        <button onClick={()=>scrollTo('about')}>About</button>
        <button onClick={()=>scrollTo('education')}>Education</button>
        <button onClick={()=>scrollTo('projects')}>Projects</button>
        <button onClick={()=>scrollTo('certificates')}>Certificates</button>
        <button onClick={()=>scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  );
}
