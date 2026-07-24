import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants/data';
import Hero from '../components/Hero';


import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function HomePage({ 
  openBookingModal, 
  setLightboxIndex, 
  handleContactSubmit 
}) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const introRef = useRef(null);

  // Review Carousel Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animated stats intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.3 }
    );
    if (introRef.current) {
      observer.observe(introRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero onBookClick={openBookingModal} />

      {/* Animated Stats Banner */}
      <section className="services-section">
        <div className="container">
          <div className="animated-stats-container" ref={introRef}>
            <div className="stats-watermark">EST 2009</div>
            <div className="stat-slide right">
              <span className="orange-text">15</span> YEARS. <span className="orange-text">2000+</span> WEDDINGS.
            </div>
            <div className="stat-slide left">
              ACROSS <span className="italic-accent">MAHARASHTRA.</span>
            </div>
          </div>
        </div>
      </section>

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
