import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center py-16 animate-fadeIn">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-700 border-t-cyan-400 mx-auto shadow-lg shadow-cyan-500/25"></div>
        <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-cyan-400/20 mx-auto"></div>
      </div>
      <p className="mt-6 text-slate-400 text-lg">Loading locations...</p>
    </div>
  );
};

export default LoadingSpinner;