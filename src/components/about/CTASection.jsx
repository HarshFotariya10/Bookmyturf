import React from 'react';

const CTASection = ({ isVisible }) => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className={`transform transition-all duration-1000 ${
          isVisible('cta') ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold mb-6 text-white">
            Ready to Play?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of sports enthusiasts who trust BookMyTurf for their sporting needs. 
            Your next great game is just a click away.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
            Start Booking Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;