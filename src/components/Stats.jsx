import React from 'react';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <div className="stat-value">4.3</div>
          <div className="stat-label">GOOGLE RATING</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 5.5 4.5 10 10 10h.01A10 10 0 0 0 21 10V7c0-1.1-.9-2-2-2zM5 10V7h2v3c0 2.2 1.8 4 4 4H9c-2.2 0-4-1.8-4-4zm14 0c0 2.2-1.8 4-4 4h-2c2.2 0 4-1.8 4-4V7h2v3zM13 18h-2v3h2v-3z"/>
            </svg>
          </div>
          <div className="stat-value">53+</div>
          <div className="stat-label">HAPPY REVIEWS</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
          <div className="stat-value">2000+</div>
          <div className="stat-label">SESSIONS DONE</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="stat-value">15+</div>
          <div className="stat-label">YEARS IN SANGLI</div>
        </div>
      </div>
    </section>
  );
}
