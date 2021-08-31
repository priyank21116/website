import React from 'react';

import Navbar from './ScreenParts.js/Header';
import Home from './ScreenParts.js/Home';
import About from './ScreenParts.js/About';
import Skills from './ScreenParts.js/Skills';
import Project from './ScreenParts.js/Project';
import Footer from './ScreenParts.js/Footer';


function App() {
  return (
    <div >
      {/* Header */}
      <Navbar />
      <div className="h-3 w-full" style={{backgroundColor :"#7CFC00"}}></div>

      {/* HOme */}
      <Home />

      {/* about */}
      <About />

      {/* Skill */}
      <Skills />

      {/* Projects */}
      <Project />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
