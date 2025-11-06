import React from 'react';
import { Zap } from 'lucide-react';

const Logo = ({ isVisible }) => {
  return (
    <div className="text-center mb-6 sm:mb-8">
      <div className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-xl mb-3 sm:mb-4 transition-all duration-700 delay-300 ${
        isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
      }`}>
        <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-green-500" />
      </div>
      <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 transition-all duration-700 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}>
        BookMyTurf
      </h1>
      <p className={`text-white/80 text-sm sm:text-base lg:text-lg transition-all duration-700 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}>
        Your game, your field, your time
      </p>
    </div>
  );
};

export default Logo;