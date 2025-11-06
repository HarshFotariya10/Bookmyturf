import React, { useState, useEffect } from 'react';
import AnimatedBackground from '../components/contact/AnimatedBackground';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactForm from '../components/contact/ContactForm';
import WhyChooseUs from '../components/contact/WhyChooseUs';
import SocialMedia from '../components/contact/SocialMedia';
import QuickStats from '../components/contact/QuickStats';
import FloatingActionButton from '../components/contact/FloatingActionButton';

const ContactUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground scrollY={scrollY} />
      
      <ContactHeader scrollY={scrollY} />
      
      <ContactInfoCards scrollY={scrollY} />

      {/* Main Content Area */}
      <div className="relative z-10 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <ContactForm scrollY={scrollY} />

          {/* Right Side Content */}
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${scrollY * -0.02}px)` }}
          >
            <WhyChooseUs />
            <SocialMedia />
            <QuickStats />
          </div>
        </div>
      </div>

      <FloatingActionButton />
    </div>
  );
};

export default ContactUs;
