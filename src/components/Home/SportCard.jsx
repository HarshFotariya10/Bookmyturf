import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const SportsCard = ({ sport, index, isVisible }) => {
  return (
    <div
      className={`flex-shrink-0 bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-blue-500/50 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ 
        width: `calc(${100 / 3}% - 1rem)`,
        transitionDelay: `${index * 100}ms` 
      }}
    >
      <div className="relative">
        <img src={sport.image} alt={sport.name} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm">
          ₹{sport.price}/hr
        </div>
        <div className="absolute top-4 left-4 bg-blue-500/80 px-3 py-1 rounded-full text-sm font-semibold">
          {sport.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
        <p className="text-gray-400 mb-4 text-sm">{sport.description}</p>
        
        <div className="flex items-center mb-3">
          <MapPin size={16} className="text-blue-400 mr-2" />
          <span className="text-sm text-gray-300">{sport.location}</span>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <Star size={16} className="text-yellow-400 mr-1 fill-current" />
            <span className="text-sm font-semibold">{sport.rating}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-green-400 mr-2" />
            <span className="text-sm text-gray-300">{sport.timeSlots.length} slots</span>
          </div>
        </div>
        
        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SportsCard;