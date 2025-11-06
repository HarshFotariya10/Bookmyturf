import React from 'react';

const StatsCard = ({ title, value, icon: Icon, color, glow }) => {
  return (
    <div className={`bg-slate-800/60 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 shadow-2xl ${glow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer overflow-hidden relative`}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}>
            <Icon className="w-6 h-6 text-white drop-shadow-sm" />
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
              {value}
            </p>
          </div>
        </div>
        <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          {title}
        </p>
      </div>
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-xl"></div>
    </div>
  );
};

export default StatsCard;