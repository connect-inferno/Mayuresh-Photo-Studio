import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1600&q=80"
];

export default function Hero({ onBookClick }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(HERO_IMAGES.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        setPrevIdx(prev);
        return (prev + 1) % HERO_IMAGES.length;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {HERO_IMAGES.map((imgUrl, index) => {
        let className = 'hero-bg';
        if (index === activeIdx) className += ' active';
        else if (index === prevIdx) className += ' prev';
        
        return (
          <div key={index} className={className}>
            <div className="hero-img" style={{ backgroundImage: `url("${imgUrl}")` }} />
          </div>
        );
      })}
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">KOLHAPUR, MAHARASHTRA — EST. 2009</span>
          <h1>Where Every <span className="italic-accent">Moment</span> Becomes Art.</h1>
          <p className="hero-desc">
            Aminesh Photography — Kolhapur's trusted photography destination for weddings, portraits, newborns, and corporate imagery. Over 2,000 sessions and counting.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-arrow" onClick={() => onBookClick('portraits')}>
              <span>BOOK A SESSION</span>
              <svg viewBox="0 0 24 24" width="16" height="16" className="arrow-icon">
                <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="#portfolio" className="btn btn-outline">VIEW PORTFOLIO</a>
          </div>
          {/* Google Reviews rating */}
          <div className="hero-rating">
            <div className="stars">
              <span className="star fill">★</span>
              <span className="star fill">★</span>
              <span className="star fill">★</span>
              <span className="star fill">★</span>
              <span className="star half">★</span>
            </div>
            <span className="rating-text"><strong>4.9</strong> &nbsp;•&nbsp; 226 Google reviews</span>
          </div>
        </div>
      </div>



      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
