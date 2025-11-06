import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfoCards = ({ scrollY }) => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+91 98765 43210",
      subtext: "Mon-Sat 9AM-8PM"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "hello@bookmyturf.com",
      subtext: "Quick response guaranteed"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: "123 Sports Complex, Jamnagar",
      subtext: "Gujarat, India 361001"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Support Hours",
      details: "24/7 Available",
      subtext: "Always here to help"
    }
  ];

  return (
    <div className="relative z-10 px-4 mb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{
              animationDelay: `${index * 0.2}s`,
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
              <p className="text-cyan-300 font-semibold mb-1">{info.details}</p>
              <p className="text-gray-400 text-sm">{info.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCards;