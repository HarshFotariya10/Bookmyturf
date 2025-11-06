import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-green-300/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-300/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default AnimatedBackground;