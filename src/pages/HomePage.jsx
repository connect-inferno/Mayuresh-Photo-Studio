import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants/data';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function HomePage({ 
  openBookingModal, 
  setLightboxIndex, 
  handleContactSubmit 
}) {
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
      <Hero onBookClick={openBookingModal} />
      <Stats />
      <Services 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onBookClick={openBookingModal} 
        onMinorCategoryClick={handleMinorCategoryClick} 
      />
      <Portfolio onImageClick={setLightboxIndex} />
      <About />
      <Reviews 
        activeReviewIndex={activeReviewIndex} 
        setActiveReviewIndex={setActiveReviewIndex} 
      />
      <Contact onSubmit={handleContactSubmit} />
    </>
  );
}
