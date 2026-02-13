
import React, { useState } from 'react';
import { getMaterialInsights } from '../services/geminiService';
import { AIResponse } from '../types';

const MaterialSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    try {
      const data = await getMaterialInsights(query);
      setResult(data);
    } catch (err) {
      setError('Failed to fetch AI insights. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Aerogel, Recycled Plastic Bricks, Bamboo..."
          className="flex-grow px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center disabled:opacity-50"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
          ) : 'Search'}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">AI Analysis</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{result.summary}</p>
              
              <h4 className="font-bold text-slate-800 mb-2">Technical Properties:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {result.properties.map((prop, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {prop}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-blue-900">Sustainability Score</span>
                <span className={`text-2xl font-black ${result.sustainabilityScore > 70 ? 'text-green-600' : 'text-orange-600'}`}>
                  {result.sustainabilityScore}/100
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full mb-8 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${result.sustainabilityScore > 70 ? 'bg-green-500' : 'bg-orange-500'}`}
                  style={{ width: `${result.sustainabilityScore}%` }}
                ></div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <h4 className="flex items-center text-blue-600 font-bold mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Expert AI Tip
                </h4>
                <p className="text-sm text-slate-600 italic">"{result.aiTips}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaterialSearch;
