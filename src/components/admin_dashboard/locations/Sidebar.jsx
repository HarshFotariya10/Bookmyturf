import React from 'react';
import { TrendingUp, MapPin, Calendar, Users, Sparkles } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'locations', label: 'Locations', icon: MapPin },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'users', label: 'Users', icon: Users }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-slate-800/80 backdrop-blur-xl border-r border-slate-700/50 shadow-2xl z-40">
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">BookMyTurf</h1>
            <p className="text-xs text-slate-400">Admin Dashboard</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="mt-6 px-4">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-4 py-3 mb-2 text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
              activeTab === item.id 
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20' 
                : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
            }`}
          >
            <item.icon className={`w-5 h-5 mr-3 transition-all duration-300 ${
              activeTab === item.id ? 'text-cyan-400 drop-shadow-sm' : 'group-hover:scale-110'
            }`} />
            <span className="font-medium">{item.label}</span>
            {activeTab === item.id && (
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-full"></div>
            )}
          </button>
        ))}
      </nav>

      {/* User Info */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl p-4 border border-slate-600/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg"></div>
            <div>
              <p className="text-white text-sm font-medium">Admin User</p>
              <p className="text-slate-400 text-xs">Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;