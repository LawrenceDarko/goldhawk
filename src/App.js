// import './App.css';\
import React from 'react';
import Index from './pages/index.js';
import About from './pages/about.js';
import Media from './pages/media.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import Partnerships from './pages/partnerships.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Media" element={<Media />}/>
        <Route exact path="/Projects" element={<Projects />}/>
        <Route exact path="/Contact" element={<Contact />}/>
        <Route exact path="/Partnerships" element={<Partnerships />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
