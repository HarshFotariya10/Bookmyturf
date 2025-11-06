import React from 'react';

const ScrollAnimation = ({ children, id, className = '', delay = 0 }) => {
  return (
    <div 
      id={id}
      className={`transform transition-all duration-1000 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;