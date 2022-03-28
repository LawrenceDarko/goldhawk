// import './App.css';\
import React from 'react';
import Index from './pages/index.js';
import About from './pages/about.js';
// import Media from './pages/media.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';
import Services from './pages/services.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/about" element={<About/>}/>
        {/* <Route exact path="/Media" element={<Media />}/> */}
        <Route exact path="/blog" element={<Blog />}/>
        <Route exact path="/Contact" element={<Contact />}/>
        <Route exact path="/services" element={<Services />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
