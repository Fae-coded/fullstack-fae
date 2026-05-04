//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-dom/client';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';
import Interests from './pages/Interests.js';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* nested route to include navbar and contact info on each page */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/interests" element={<Interests />} />
          {/* to catch unmatched routes and display a 404 page 
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
