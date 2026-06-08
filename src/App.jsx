//import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';
import { Experience } from './pages/Experience.jsx';
import { Interests } from './pages/Interests.jsx';
import Banners from './components/Banners.jsx';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Banners />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="interests" element={<Interests />} />
          {/* to catch unmatched routes and display a 404 page 
          <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
  );
}

export default App
