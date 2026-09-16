import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import FotografiaTeaser from './components/fotografia/FotografiaTeaser';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Fotografia from './components/fotografia/Fotografia';

function App() {
  const [showFoto, setShowFoto] = useState(false);

  if (showFoto) {
    return <Fotografia onBack={() => setShowFoto(false)} />;
  }

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Projects />
        <FotografiaTeaser onOpen={() => setShowFoto(true)} />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
