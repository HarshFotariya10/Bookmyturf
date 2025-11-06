import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-slate-800/60 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative group">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
          <input
            type="text"
            placeholder="Search locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white placeholder-slate-400 transition-all duration-300"
          />
        </div>
        <button className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-xl transition-all duration-300">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
