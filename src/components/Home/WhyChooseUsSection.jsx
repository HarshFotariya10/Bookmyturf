import React from 'react';
import { CheckCircle, Clock, Users, Star } from 'lucide-react';

const WhyChooseUsSection = ({ isVisible }) => {
  const features = [
    { icon: CheckCircle, title: 'Verified Venues', desc: 'All venues are quality checked and verified' },
    { icon: Clock, title: 'Instant Booking', desc: 'Book your slot instantly with real-time availability' },
    { icon: Users, title: 'Community Driven', desc: 'Join thousands of sports enthusiasts' },
    { icon: Star, title: 'Best Prices', desc: 'Competitive pricing with exclusive offers' }
  ];

  return (
    <section className="py-20 bg-gray-900" data-animate>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible('reviews') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            Why Choose BookMyTurf?
          </h2>
          <p className="text-xl text-gray-300">Experience the difference with our premium platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible('reviews') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
