// src/App.js
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Socialicons from './components/Socialicons'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Socialicons/>
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
