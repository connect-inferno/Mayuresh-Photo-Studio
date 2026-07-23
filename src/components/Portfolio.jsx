import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_CATEGORIES } from '../constants/data';

export default function Portfolio() {
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
        <h2 className="serif-title">Explore Categories.</h2>

        <div className="portfolio-grid" ref={gridRef}>
          {PORTFOLIO_CATEGORIES.map((cat, idx) => (
            <Link 
              key={idx}
              to={`/gallery/${cat.id}`}
              className="portfolio-item split-reveal-item"
              style={{ '--reveal-delay': `${(idx % 3) * 200}ms` }}
            >
              <div className="split-reveal-cover"></div>
              <img src={cat.image} alt={cat.title} />
              <div className="portfolio-hover">
                <div className="hover-content">
                  <span>{cat.postCount} PHOTOS</span>
                  <h4>{cat.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
