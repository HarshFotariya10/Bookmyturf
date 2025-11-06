import React from 'react';
import { sportCategories } from '../../data/aboutData';

const CategoriesSection = ({ isVisible }) => {
  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible('categories') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Sports We Cover
          </h2>
          <p className="text-xl text-gray-400">From outdoor adventures to indoor competitions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportCategories.map((category, index) => (
            <div 
              key={category.name}
              className={`group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                isVisible('categories') 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {category.desc}
              </p>
              <div className="mt-4 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
