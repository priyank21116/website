import React, { useEffect,useState } from 'react';

import Navbar from './ScreenParts.js/Header';
import Home from './ScreenParts.js/Home';
import About from './ScreenParts.js/About';
import Skills from './ScreenParts.js/Skills';
import Project from './ScreenParts.js/Project';
import Footer from './ScreenParts.js/Footer';
import Hello from './ScreenParts.js/Hello';


function App() {


  function AppComp(){
    return (
      <div >
        {/* Header */}
        <Navbar />
        {/* <div className="h-3 w-full" style={{ backgroundColor: "#7CFC00" }}></div> */}

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
    )
  }
  function Hellooo(){

    return(
      <Hello />
    )
  }

  const [Comp, setComp] = useState(Hellooo)

  useEffect(() => {
    const timer = setTimeout(() =>
    (    setComp(AppComp)
        
      ), 3000);
      console.log("USE EEEFFECTTT")
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
     <AppComp />
    </>
  );
}


export default App;
