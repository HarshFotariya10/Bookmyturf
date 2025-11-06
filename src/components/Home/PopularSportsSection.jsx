import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SportsCard from './SportCard';

const PopularSportsSection = ({ isVisible, popularSports }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const sportsPerView = 3;
  const maxScrollIndex = Math.max(0, popularSports.length - sportsPerView);

  const scrollLeft = () => {
    setScrollIndex(prev => Math.max(0, prev - 1));
    resetAutoScroll();
  };

  const scrollRight = () => {
    setScrollIndex(prev => Math.min(maxScrollIndex, prev + 1));
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    startAutoScroll();
  };

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      setScrollIndex(prev => {
        if (prev >= maxScrollIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  return (
    <section id="sports" className="py-20 bg-gray-800/50" data-animate>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible('sports') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Popular Sports Venues
          </h2>
          <p className="text-xl text-gray-300">Choose from our premium collection of sports facilities</p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            disabled={scrollIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700 hover:border-blue-500"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={scrollIndex >= maxScrollIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700 hover:border-blue-500"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-hidden mx-12"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${scrollIndex * (100 / sportsPerView)}%)`,
                width: `${(popularSports.length / sportsPerView) * 100}%`
              }}
            >
              {popularSports.map((sport, index) => (
                <SportsCard 
                  key={sport._id}
                  sport={sport}
                  index={index}
                  isVisible={isVisible('sports')}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxScrollIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setScrollIndex(index);
                  resetAutoScroll();
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === scrollIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSportsSection;