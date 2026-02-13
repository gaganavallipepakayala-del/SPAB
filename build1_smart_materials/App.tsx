
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MaterialsGrid from './components/MaterialsGrid';
import SmartTech from './components/SmartTech';
import ResourcesGrid from './components/ResourcesGrid';
import WhyChoose from './components/WhyChoose';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MaterialSearch from './components/MaterialSearch';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AboutUs />
                <div id="materials">
                  <MaterialsGrid />
                </div>
                <div id="search" className="bg-slate-100 py-16 px-4">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">AI Material Research Assistant</h2>
                    <MaterialSearch />
                  </div>
                </div>
                <SmartTech />
                <ResourcesGrid />
                <WhyChoose />
                <CTA />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
