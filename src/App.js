import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import AboutMe from './components/pages/About/AboutMe';
import Projects from './components/pages/Projects/Projects';
import Blog from './components/pages/Blog/Blog';
import ArtGallery from './components/pages/Art/ArtGallery';



function App() {
  const location = useLocation();

  // Scroll to the top of the page when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/art-portfolio" element={<ArtGallery />} />
    </Routes>
  );
}

export default App;