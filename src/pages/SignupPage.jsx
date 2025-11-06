import React, { useState, useEffect } from 'react';
import SignupForm from '../components/auth/signup/SignupForm';
import AnimatedBackground from '../components/auth/signup/AnimatedBackground';
import Logo from '../components/auth/login/Logo';

const SignupPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className={`relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <Logo isVisible={isVisible} />
        <SignupForm isVisible={isVisible} />
      </div>
    </div>
  );
};

export default SignupPage;