import React from 'react';

const FloatingSportsIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>⚽</div>
      <div className="absolute top-40 right-20 text-3xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🏀</div>
      <div className="absolute bottom-40 left-20 text-5xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>🎾</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}>🏈</div>
      <div className="absolute top-1/3 left-1/4 text-2xl animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.8s'}}>🏏</div>
      <div className="absolute top-2/3 right-1/3 text-4xl animate-bounce" style={{animationDelay: '2.5s', animationDuration: '3.2s'}}>🏐</div>
    </div>
  );
};

export default FloatingSportsIcons;