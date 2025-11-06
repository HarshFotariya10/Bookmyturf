import React from 'react';

const ContactHeader = ({ scrollY }) => {
  return (
    <div 
      className="relative z-10 pt-20 pb-10 text-center"
      style={{ transform: `translateY(${scrollY * 0.2}px)` }}
    >
      <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        Contact Us
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
        Ready to book your perfect sports venue? We're here to help make your game day amazing!
      </p>
      <div className="flex justify-center mt-8 space-x-4">
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default ContactHeader;