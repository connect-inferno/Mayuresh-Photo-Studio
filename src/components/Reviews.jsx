import React from 'react';
import { TESTIMONIALS } from '../constants/data';

export default function Reviews({ activeReviewIndex, setActiveReviewIndex }) {
  const handlePrev = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReviewIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header text-center">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="serif-title">Loved by Our Clients</h2>
        </div>

        <div className="reviews-carousel">
          {/* Prev arrow */}
          <button className="carousel-arrow carousel-arrow-prev" onClick={handlePrev} aria-label="Previous review">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="carousel-track-container">
            <ul className="carousel-track">
              {TESTIMONIALS.map((review, idx) => (
                <li key={idx} className={`carousel-slide ${activeReviewIndex === idx ? 'active' : ''}`}>
                  <div className="review-card">
                    <div className="review-stars">{review.stars}</div>
                    <p className="review-text">{review.text}</p>
                    <div className="review-author">
                      <strong>{review.author}</strong>
                      <span>{review.clientType}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Next arrow */}
          <button className="carousel-arrow carousel-arrow-next" onClick={handleNext} aria-label="Next review">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="carousel-nav">
            {TESTIMONIALS.map((_, idx) => (
              <button 
                key={idx}
                className={`carousel-indicator ${activeReviewIndex === idx ? 'active' : ''}`}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setActiveReviewIndex(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
