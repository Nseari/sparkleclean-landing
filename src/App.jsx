import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import WaterScene from './components/WaterScene';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <WaterScene />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
