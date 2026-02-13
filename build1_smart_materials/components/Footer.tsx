
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">B</div>
              <span className="text-xl font-bold text-slate-900">BuildSmart</span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              The leading hub for construction material intelligence. Blending age-old wisdom with future AI solutions.
            </p>
            <div className="flex space-x-4">
              {['FB', 'TW', 'LN', 'IG'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 col-span-1 lg:col-span-2">
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Navigation</h4>
              <ul className="space-y-4">
                {['About Us', 'Materials', 'Resources', 'Technology'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Support</h4>
              <ul className="space-y-4">
                {['Help Center', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Stay Updated</h4>
            <p className="text-slate-500 mb-4 text-sm">Subscribe to our newsletter for the latest AI insights.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} BuildSmart Materials. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-600">Site Map</a>
            <a href="#" className="hover:text-blue-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
