import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PORTFOLIO_CATEGORIES, GALLERY_IMAGES } from '../constants/data';

export default function CategoryGallery() {
  const { category } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const catData = PORTFOLIO_CATEGORIES.find(c => c.id === category);
  const images = GALLERY_IMAGES[category] || [];

  if (!catData) {
    return (
      <div className="gallery-page">
        <div className="container" style={{ textAlign: 'center', paddingTop: '120px' }}>
          <h1 style={{ color: 'var(--text-white)', marginBottom: '16px' }}>Category Not Found</h1>
          <Link to="/" className="btn btn-primary">Go Back Home</Link>
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-page">
      <div className="container">
        {/* Back link */}
        <Link to="/#portfolio" className="gallery-back-link">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          <span>Back to Portfolio</span>
        </Link>

        {/* Instagram-style profile header */}
        <div className="gallery-header">
          <img 
            src={catData.image} 
            alt={catData.title}
            className="gallery-profile-pic"
          />
          <div className="gallery-info">
            <div className="gallery-info-top">
              <h1>{catData.title}</h1>
              <span className="gallery-category-badge">{catData.id.toUpperCase()}</span>
            </div>
            <div className="gallery-stats">
              <span><strong>{catData.postCount}</strong> posts</span>
              <span><strong>XYZ</strong> Photography</span>
              <span><strong>Sangli</strong>, Maharashtra</span>
            </div>
            <p className="gallery-bio">
              📸 {catData.desc}<br/>
              🏆 15+ Years of Excellence<br/>
              📍 Sangli, Maharashtra
            </p>
          </div>
        </div>

        {/* Grid/Tabs separator like Instagram */}
        <div className="gallery-tab-bar">
          <button className="gallery-tab active">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <rect x="1" y="1" width="9" height="9" rx="1"/>
              <rect x="14" y="1" width="9" height="9" rx="1"/>
              <rect x="1" y="14" width="9" height="9" rx="1"/>
              <rect x="14" y="14" width="9" height="9" rx="1"/>
            </svg>
            POSTS
          </button>
        </div>

        {/* 3-column Instagram grid */}
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="gallery-item"
              onClick={() => setLightboxIndex(idx)}
            >
              <img src={img} alt={`${catData.title} photo ${idx + 1}`} loading="lazy" />
              <div className="gallery-item-hover">
                <span>❤️ {Math.floor(Math.random() * 300 + 50)}</span>
                <span>💬 {Math.floor(Math.random() * 40 + 5)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="gallery-lightbox" onClick={() => setLightboxIndex(null)}>
          <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={() => setLightboxIndex(null)}>✕</button>
            <button className="gallery-lightbox-arrow left" onClick={handlePrev}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <img src={images[lightboxIndex]} alt={`${catData.title} ${lightboxIndex + 1}`} />
            <button className="gallery-lightbox-arrow right" onClick={handleNext}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <div className="gallery-lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
