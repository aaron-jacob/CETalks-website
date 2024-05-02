// App.jsx

import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Media from './pages/Media';
import OurTeam from './pages/OurTeam';
import Spotlight from './pages/Spotlight';
import Contact from './pages/Contact';
import Events from './pages/Events';
const App = () => {


  return (
    
      <Router>
      <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/spotlight" element={<Spotlight />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
          </Routes>
</>
    </Router>
  

  );
};

export default App;
