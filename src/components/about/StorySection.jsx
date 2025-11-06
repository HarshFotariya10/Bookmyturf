import React from 'react';
import { Play } from 'lucide-react';

const StorySection = ({ isVisible }) => {
  return (
    <section id="story" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible('story') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Born from a simple frustration - finding and booking sports facilities shouldn't be complicated. 
              We're a team of sports enthusiasts and tech innovators who believe everyone deserves easy access to 
              quality sports facilities.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From weekend warriors to professional athletes, we've created a platform that connects you with 
              the perfect venue for your sporting needs. Every booking, every game, every moment of joy on the 
              field drives us forward.
            </p>
            <div className="flex items-center space-x-4">
              <Play className="text-cyan-400" size={24} />
              <span className="text-gray-400">Empowering sports communities since 2023</span>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 ${
            isVisible('story') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-gray-900 rounded-2xl p-6 transform -rotate-3">
                  <div className="text-6xl mb-4 text-center">🏆</div>
                  <h3 className="text-2xl font-bold text-center mb-4">Sports for Everyone</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Outdoor 🏟️', 'Indoor 🏢', 'Racquet 🎾', 'Fitness 💪'].map((sport) => (
                      <div key={sport} className="bg-gray-800 rounded-lg p-3 text-center text-sm">
                        {sport}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;