import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = ({ isVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" data-animate>
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>
      
      <div className={`relative z-10 text-center max-w-4xl px-4 transform transition-all duration-1000 ${
        isVisible('home') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Book Your Perfect
          <br />
          Sports Venue
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Discover premium sports facilities in your city and book instantly
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            Explore Venues <ArrowRight className="inline ml-2" size={20} />
          </button>
          <button className="px-8 py-4 border-2 border-white/30 rounded-full text-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
            <Play className="mr-2" size={20} /> Watch Demo
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;