import React from 'react';
import { useScrollAnimation } from '../../src/components/about/hooks/useScrollAnimation';
import HeroSection from '../components/about/HeroSection';
import StatsSection from '../components/about/StatsSection';
import StorySection from '../components/about/StorySection';
import CategoriesSection from '../components/about/CategoriesSection';
import ValuesSection from '../components/about/ValuesSection';
import CTASection from '../components/about/CTASection';

const AboutPage = () => {
  const { scrollY, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <HeroSection scrollY={scrollY} />
      <StatsSection isVisible={isVisible} />
      <StorySection isVisible={isVisible} />
      <CategoriesSection isVisible={isVisible} />
      <ValuesSection isVisible={isVisible} />
      <CTASection isVisible={isVisible} />
    </div>
  );
};

export default AboutPage;