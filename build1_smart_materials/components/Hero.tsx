
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 lg:pb-0 pt-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 py-12 lg:py-24 z-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Futuristic Building Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Smart Knowledge for <br />
              <span className="text-blue-600">Smarter Construction</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Explore detailed insights about construction materials, modern techniques, and AI-powered building solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#materials" className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-center">
                Explore Materials
              </a>
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all text-center">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Illustration Container (16:9 Hero Section) */}
          <div className="w-full lg:w-1/2 relative z-0">
            <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
              {/* Complex Vector Illustration Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
                  alt="Construction background" 
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                />
              </div>
              
              {/* Character Layer (Stylized Overlay) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                
                {/* Visual Representation of the Requested Scene */}
                <div className="relative h-full w-full">
                  {/* Center: AI Construction Robot */}
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">
                    <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce transition-all duration-1000">
                      <div className="text-4xl">🤖</div>
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[8px] font-bold px-1.5 rounded">V1.2</div>
                    </div>
                    <p className="text-[10px] font-bold text-white uppercase mt-2 drop-shadow">AI Supervisor</p>
                  </div>

                  {/* Left: Construction Worker */}
                  <div className="absolute left-10 bottom-4 text-center">
                    <div className="text-4xl drop-shadow-lg">👷‍♂️</div>
                    <p className="text-[10px] font-bold text-white uppercase mt-1 drop-shadow">Traditional Skill</p>
                  </div>

                  {/* Right: Site Supervisor & Truck */}
                  <div className="absolute right-10 bottom-10 text-center">
                    <div className="text-4xl drop-shadow-lg">📋 🚛</div>
                    <p className="text-[10px] font-bold text-white uppercase mt-1 drop-shadow">Site Logistics</p>
                  </div>

                  {/* Assistant Robots */}
                  <div className="absolute left-[30%] bottom-20 text-2xl animate-pulse delay-75">🛸</div>
                  <div className="absolute right-[35%] top-20 text-2xl animate-pulse delay-300">🛸</div>

                  {/* Crane / Skyscrapers in background */}
                  <div className="absolute top-4 right-4 text-6xl opacity-20">🏗️</div>
                  <div className="absolute top-10 left-10 text-4xl opacity-10">🏢</div>
                </div>

                <div className="relative z-10 glass-effect p-4 rounded-xl max-w-xs border border-white/30 mb-4 ml-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-tighter">AI Verification</p>
                      <p className="text-[10px] text-slate-500">Structural codes validated in 2ms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI Elements outside the 16:9 box for depth */}
            <div className="hidden xl:block absolute -top-8 -right-8 glass-effect p-6 rounded-2xl shadow-2xl border border-white/50 w-48 animate-pulse">
              <div className="flex justify-between items-end mb-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Efficiency</div>
                <div className="text-xl font-bold text-blue-600">+42%</div>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;
