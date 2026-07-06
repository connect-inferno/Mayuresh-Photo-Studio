import React from 'react';

export default function Hero({ onBookClick }) {
  return (
    <section className="hero-section">
      <div 
        className="hero-bg" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1600&q=80")' 
        }}
      />
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">SANGLI, MAHARASHTRA — EST. 2009</span>
          <h1>Where Every <span className="italic-accent">Moment</span> Becomes Art.</h1>
          <p className="hero-desc">
            Mayuresh Photo Studio — Sangli's trusted photography destination for weddings, portraits, newborns, and corporate imagery. Over 2,000 sessions and counting.
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
            <span className="rating-text"><strong>4.3</strong> &nbsp;•&nbsp; 53 Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
