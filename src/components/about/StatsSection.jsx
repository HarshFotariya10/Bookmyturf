import React from 'react';
import { stats } from '../../data/aboutData';

const StatsSection = ({ isVisible }) => {
  return (
    <section id="stats" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transform transition-all duration-1000 ${
                isVisible('stats') 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                {stat.number}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;