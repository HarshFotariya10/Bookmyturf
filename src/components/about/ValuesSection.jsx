import React from 'react';
import { values } from '../../data/aboutData';

const ValuesSection = ({ isVisible }) => {
  return (
    <section id="values" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white"/><circle cx="80" cy="20" r="2" fill="white"/><circle cx="20" cy="80" r="2" fill="white"/><circle cx="80" cy="80" r="2" fill="white"/><circle cx="50" cy="50" r="3" fill="white"/></svg>')}`
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible('values') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-xl text-gray-400">What drives us every day</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className={`group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform ${
                isVisible('values') 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
