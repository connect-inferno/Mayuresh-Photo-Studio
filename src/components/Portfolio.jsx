import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants/data';

export default function Portfolio({ onImageClick }) {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <span className="section-tag">OUR WORK</span>
        <h2 className="serif-title">A Glimpse Into Our Studio.</h2>

        <div className="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className={`portfolio-item ${item.class}`}
              onClick={() => onImageClick(idx)}
            >
              <img src={item.image} alt={item.title} />
              <div className="portfolio-hover">
                <div className="hover-content">
                  <span>{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
