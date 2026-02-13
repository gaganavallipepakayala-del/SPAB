
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                alt="Construction collaboration" 
                className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-3xl shadow-xl border border-white/50 max-w-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Insight</span>
                </div>
                <p className="text-slate-800 font-semibold text-lg leading-tight">
                  "Blending legacy expertise with modern intelligence isn't a luxury—it's the new standard for building."
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 flex items-center justify-center text-xl">🏗️</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Marcus Sterling</p>
                    <p className="text-xs text-slate-500">Master Builder & AI Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Educating the Modern <br className="hidden md:block" /> Construction Professional
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              BuildSmart Materials serves as an educational and professional resource hub. We bridge the gap between traditional construction wisdom and the rapidly evolving world of AI-powered solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900">Reliable Data</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Industry-backed material specifications and structural standards updated in real-time.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900">AI Integration</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Leveraging generative models and predictive analytics to optimize building material selection.</p>
              </div>
            </div>
            
            <button className="mt-12 flex items-center space-x-2 text-blue-600 font-bold group">
              <span>Read Our Full Story</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
