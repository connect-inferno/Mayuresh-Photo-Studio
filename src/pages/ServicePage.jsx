import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MINOR_SERVICES, SERVICES, PORTFOLIO_ITEMS } from '../constants/data';
import Portfolio from '../components/Portfolio';

export default function ServicePage({ openBookingModal, setLightboxIndex }) {
  const { slug } = useParams();
  
  // Find the specific minor service by slug
  const minorService = MINOR_SERVICES.find(s => s.slug === slug);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!minorService) {
    return <Navigate to="/" replace />;
  }

  const parentService = SERVICES[minorService.genre];
  
  // Filter portfolio for this genre (optional, but nice)
  // Our Portfolio component currently uses all items, but we could make a custom grid here or reuse it.
  // Actually, Portfolio component handles its own state (ALL, PORTRAITS, etc). We'll just show a custom grid.

  const filteredPortfolio = PORTFOLIO_ITEMS.filter(
    item => item.category.toLowerCase() === minorService.genre.toLowerCase()
  );

  return (
    <div className="service-page">
      {/* Custom Hero for the Service */}
      <section className="service-hero" style={{ 
        position: 'relative', 
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        backgroundColor: '#000',
        color: '#fff'
      }}>
        <div 
          className="service-hero-bg" 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${minorService.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: 1
          }} 
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link to="/#services" className="btn-link" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
            &larr; BACK TO SERVICES
          </Link>
          <span className="section-tag" style={{ color: '#FF5E14' }}>{minorService.icon} SPECIALTY GENRE</span>
          <h1 className="serif-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '20px' }}>
            {minorService.label}
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', opacity: 0.9, marginBottom: '40px' }}>
            {parentService.desc}
          </p>
          <button 
            className="btn btn-primary" 
            onClick={() => openBookingModal(minorService.genre)}
          >
            BOOK A {minorService.label.toUpperCase()} SESSION
          </button>
        </div>
      </section>

      {/* Details Section */}
      <section className="container" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="serif-subtitle">Excellence in {minorService.label}</h2>
          <p style={{ fontSize: '16px', color: '#5F5F5F', lineHeight: 1.8, marginBottom: '40px' }}>
            Every session is unique. We take the time to understand your vision and combine it with our technical expertise to produce stunning results. Whether in our studio or on location, we ensure a comfortable environment so your authentic self shines through.
          </p>
        </div>
        
        {/* Simple Gallery for this specific genre */}
        {filteredPortfolio.length > 0 && (
          <div style={{ marginTop: '60px' }}>
            <h3 className="serif-title" style={{ textAlign: 'center', fontSize: '2rem' }}>Recent Work</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px', 
              marginTop: '40px' 
            }}>
              {filteredPortfolio.map((item, idx) => (
                <div key={idx} style={{ height: '300px', borderRadius: '4px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
