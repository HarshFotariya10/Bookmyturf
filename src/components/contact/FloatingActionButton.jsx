import React from 'react';
import { Phone } from 'lucide-react';

const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-20">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce">
        <Phone className="w-6 h-6" />
      </div>
    </div>
  );
};

export default FloatingActionButton;