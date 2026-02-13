
import React from 'react';
import { CATEGORIES } from '../constants';

const MaterialsGrid: React.FC = () => {
  return (
    <section id="materials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs for aesthetic */}
      <div className="absolute top-1/4 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">The Library</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Material Categories</h3>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A comprehensive database of the essential elements used in modern and future architectural marvels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white p-10 rounded-[2.5rem] card-hover border border-slate-100 flex flex-col items-start group relative"
            >
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-50 transition-colors duration-300">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300 z-10">
                {cat.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 z-10">{cat.title}</h4>
              <p className="text-slate-500 mb-10 leading-relaxed z-10">
                {cat.description}
              </p>
              <button className="mt-auto flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors z-10">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover:ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsGrid;
