import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", color: "hover:bg-blue-400" },
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", color: "hover:bg-pink-500" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        Follow Us
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((social, index) => (
          <button
            key={index}
            className={`group flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 ${social.color} text-white py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
              {social.icon}
            </span>
            <span className="font-semibold">{social.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
