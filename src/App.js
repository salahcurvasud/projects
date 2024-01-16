import React from "react";
import "./index.css"
import Home from  "./router/Home";
import Projects from  "./router/Projects";
import Contact from  "./router/Contact";
import About from  "./router/About";

import { Route,Routes } from "react-router-dom";



function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
  
    </Routes>
    </>



    
  );
}

export default App;
