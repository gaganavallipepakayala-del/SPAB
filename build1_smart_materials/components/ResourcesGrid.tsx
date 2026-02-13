
import React from 'react';
import { RESOURCES } from '../constants';

const ResourcesGrid: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Knowledge Resources</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Articles, Tutorials & Guides</h3>
          </div>
          <button className="mt-6 md:mt-0 text-blue-600 font-bold flex items-center hover:translate-x-1 transition-all">
            Browse Full Library
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESOURCES.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full border border-slate-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider text-white ${
                    item.type === 'Article' ? 'bg-blue-600' : 
                    item.type === 'Video' ? 'bg-orange-500' : 
                    item.type === 'Chart' ? 'bg-indigo-600' : 'bg-green-600'
                  }`}>
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.author}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <button className="text-blue-600 text-sm font-bold flex items-center group/btn">
                    <span>{item.type === 'Guide' ? 'Download PDF' : 'Read Full Item'}</span>
                    <svg className="w-4 h-4 ml-1 group-hover/btn:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
