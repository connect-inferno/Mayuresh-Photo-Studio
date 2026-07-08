import React from 'react';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid-layout">
        <div className="stats-editorial">
          <span className="section-tag">OUR JOURNEY IN NUMBERS</span>
          <h2 className="serif-title">Trust, Expertise, and Artistry.</h2>
          <p className="stats-desc">
            Since 2009, Mayuresh Photo Studio has been Sangli's trusted destination for high-end photography. 
            We blend classic camera techniques with modern styling to craft milestones that endure.
          </p>
        </div>
        <div className="stats-numbers-grid">
          <div className="stat-item">
            <div className="stat-number-row">
              <span className="stat-number">4.3</span>
              <span className="stat-dot">.</span>
            </div>
            <div className="stat-text-label">GOOGLE RATING</div>
          </div>
          <div className="stat-item">
            <div className="stat-number-row">
              <span className="stat-number">53+</span>
              <span className="stat-dot">.</span>
            </div>
            <div className="stat-text-label">HAPPY REVIEWS</div>
          </div>
          <div className="stat-item">
            <div className="stat-number-row">
              <span className="stat-number">2000+</span>
              <span className="stat-dot">.</span>
            </div>
            <div className="stat-text-label">SESSIONS DONE</div>
          </div>
          <div className="stat-item">
            <div className="stat-number-row">
              <span className="stat-number">15+</span>
              <span className="stat-dot">.</span>
            </div>
            <div className="stat-text-label">YEARS IN SANGLI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
