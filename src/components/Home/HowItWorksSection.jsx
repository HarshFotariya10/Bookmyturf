import React from 'react';

const HowItWorksSection = ({ isVisible }) => {
  const howItWorks = [
    {
      step: 1,
      title: 'Browse Sports',
      description: 'Explore our wide range of sports facilities in your area',
      icon: '🏃'
    },
    {
      step: 2,
      title: 'Select Time Slot',
      description: 'Choose your preferred date and time from available slots',
      icon: '⏰'
    },
    {
      step: 3,
      title: 'Book & Pay',
      description: 'Secure your booking with our safe payment gateway',
      icon: '💳'
    },
    {
      step: 4,
      title: 'Play & Enjoy',
      description: 'Show up and enjoy your game at the booked facility',
      icon: '🎯'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900" data-animate>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300">Simple steps to book your favorite sports venue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div
              key={step.step}
              className={`text-center transform transition-all duration-1000 ${
                isVisible('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;