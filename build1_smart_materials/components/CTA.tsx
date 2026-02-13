
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-blue-gray rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          {/* Animated background highlights */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-800/50 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Start Building <br /> Smarter Today</h2>
            <p className="text-blue-100 text-xl md:text-2xl mb-12 font-medium opacity-90">
              Join thousands of professionals using BuildSmart to source better materials and optimize their building processes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-blue-900 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                Explore Materials
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
