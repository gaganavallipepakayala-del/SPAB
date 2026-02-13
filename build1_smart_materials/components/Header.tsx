
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
          <span className="text-xl font-bold text-slate-900 hidden sm:inline-block">BuildSmart</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#materials" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Materials</a>
          <a href="#search" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">AI Search</a>
          <a href="#resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Resources</a>
          <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-slate-600 font-medium hover:text-blue-600 px-4 py-2 transition-colors">Log In</button>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
