import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS, TESTIMONIALS } from '../constants/data';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function Home({ onBookClick, onContactSubmit }) {
  const [activeTab, setActiveTab] = useState('portraits');
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Review Carousel Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMinorCategoryClick = (genre) => {
    setActiveTab(genre);
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onBookClick={onBookClick} />

      <Services 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onBookClick={onBookClick} 
        onMinorCategoryClick={handleMinorCategoryClick} 
      />
      <Portfolio />
      <About />
      <Reviews 
        activeReviewIndex={activeReviewIndex} 
        setActiveReviewIndex={setActiveReviewIndex} 
      />
      <Contact onSubmit={onContactSubmit} />
    </>
  );
}
