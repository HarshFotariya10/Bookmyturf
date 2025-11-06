import React from 'react';

const AnimatedBackground = ({ scrollY }) => {
  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 10 + 5) + 's',
              transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`
            }}
          />
        ))}
      </div>

      {/* Sports Icons Floating Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {['⚽', '🏀', '🎾', '🏸', '🏏', '🏐'].map((icon, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-bounce"
            style={{
              left: Math.random() * 90 + 5 + '%',
              top: Math.random() * 90 + 5 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 3 + 2) + 's',
              transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;