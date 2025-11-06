
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  id, 
  children, 
  className = '', 
  delay = 0,
  animation = 'translate-y-0 opacity-100' 
}) => {
  const { isVisible } = useScrollAnimation();

  return (
    <section 
      id={id} 
      className={className} 
      data-animate
    >
      <div 
        className={`transform transition-all duration-1000 ${
          isVisible(id) ? animation : 'translate-y-20 opacity-0'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;