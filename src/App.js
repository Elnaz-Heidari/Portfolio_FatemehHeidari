// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import PersonalData from './components/PersonalData';
import AcademicCredentials from './components/AcademicCredentials';
import ProfessionalSummary from './components/ProfessionalSummary';
import AcademicExperience from './components/AcademicExperience';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Specify an element for the root route */}
          <Route path="/home" element={<Home />} />
          <Route path="/personal" element={<PersonalData />} />
          <Route path="/academic" element={<AcademicCredentials />} />
          <Route path="/professional" element={<ProfessionalSummary />} />
          <Route path="/experience" element={<AcademicExperience />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
