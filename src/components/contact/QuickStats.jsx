import React from 'react';

const QuickStats = () => {
  const stats = [
    { number: "10K+", label: "Happy Players" },
    { number: "500+", label: "Venues Listed" },
    { number: "50K+", label: "Bookings Made" },
    { number: "25+", label: "Cities Covered" }
  ];

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
        Our Impact
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
