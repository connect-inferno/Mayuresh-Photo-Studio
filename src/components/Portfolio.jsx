import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../constants/data';

export default function Portfolio({ onImageClick }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.portfolio-item');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <span className="section-tag">OUR WORK</span>
        <h2 className="serif-title">A Glimpse Into Our Studio.</h2>

        <div className="portfolio-grid" ref={gridRef}>
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className={`portfolio-item ${item.class}`}
              style={{ '--reveal-delay': `${(idx % 3) * 100}ms` }}
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
