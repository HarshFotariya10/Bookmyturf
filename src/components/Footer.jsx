
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../components/Home/hooks/useScrollAnimation';

const Footer = () => {
  const { isVisible } = useScrollAnimation();

  return (
    <footer id="contact" className="bg-gray-950 py-16 border-t border-gray-800" data-animate>
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 delay-200 ${
          isVisible('contact') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                BookMyTurf
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your ultimate destination for booking premium sports venues. 
                Play your favorite sport at the best facilities in your city.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Facebook size={20} />
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <Twitter size={20} />
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <Instagram size={20} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports Venues</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>info@bookmyturf.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BookMyTurf. All rights reserved. | Made with ❤️ for sports enthusiasts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;