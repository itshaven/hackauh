import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;