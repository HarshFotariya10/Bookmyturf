import React from 'react';
import { Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    "Instant booking confirmation",
    "Best prices guaranteed", 
    "Quality venues verified",
    "24/7 customer support",
    "Easy cancellation policy"
  ];

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Why Choose BookMyTurf?
      </h3>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;