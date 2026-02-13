
import React from 'react';

const SmartTech: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Innovation & Efficiency</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Smart Construction Technology</h3>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            We explore how artificial intelligence and advanced robotics are reshaping the way we plan, source, and build the structures of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { 
                title: 'AI in Construction', 
                desc: 'Generative design and structural optimization using neural networks.', 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                color: 'blue'
              },
              { 
                title: 'Robotics in Building', 
                desc: 'Autonomous bricklaying and high-precision welding bots for safer sites.', 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'orange'
              },
              { 
                title: 'Sustainable Innovations', 
                desc: 'Net-zero materials and modular building systems for a greener future.', 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                color: 'blue'
              },
              { 
                title: 'Cost Optimization', 
                desc: 'Using machine learning to predict price fluctuations and reduce waste.', 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'orange'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-start">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'} transition-colors group-hover:bg-opacity-80`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-blue-400 font-bold text-sm uppercase tracking-widest block mb-4">Case Study</span>
              <h4 className="text-3xl md:text-4xl font-bold mb-6">The Future of Automated Prefabrication</h4>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Our latest research highlights how 3D printing and robotic assembly are cutting onsite construction time by 60% while drastically improving structural precision.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-slate-300">Reduced carbon footprint by 40%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-slate-300">Real-time material stress telemetry</span>
                </div>
              </div>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/40">
                Read the Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTech;
