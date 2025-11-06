import React from 'react';
import { ChevronRight } from 'lucide-react';
import FloatingSportsIcons from '../about/common/FloatingSportsIcons';

const HeroSection = ({ scrollY }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Sports Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            transform: `scale(${1.1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </div>

      <FloatingSportsIcons />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full animate-pulse"
            style={{
              width: Math.random() * 6 + 4 + 'px',
              height: Math.random() * 6 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 4 + 2) + 's'
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="transform transition-all duration-1000 hover:scale-105">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            <span className="inline-block animate-pulse">BookMyTurf</span>
          </h1>
        </div>
        
        <div className="transform transition-all duration-700 hover:scale-102">
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed backdrop-blur-sm bg-black/30 px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
            Revolutionizing sports booking with seamless experiences
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-1 shadow-lg">
          Explore Sports Venues
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="rotate-90 text-white/60" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;