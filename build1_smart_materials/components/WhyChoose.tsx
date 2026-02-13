
import React from 'react';
import { FEATURES } from '../constants';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why Choose BuildSmart?</h2>
          <p className="text-lg text-slate-500 mt-6 max-w-2xl mx-auto font-medium">
            We are more than just a library; we are a technological partner for your construction career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="text-center group p-4">
              <div className="w-20 h-20 mx-auto bg-slate-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-200 group-hover:-rotate-6 transition-all duration-500">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm font-medium px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
