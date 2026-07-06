import React from 'react';
import { TESTIMONIALS } from '../constants/data';

export default function Reviews({ activeReviewIndex, setActiveReviewIndex }) {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header text-center">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="serif-title">Loved by Our Clients</h2>
        </div>

        <div className="reviews-carousel">
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

          {/* Testimonials Dots Indicator */}
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
