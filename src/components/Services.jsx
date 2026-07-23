import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, MINOR_SERVICES } from '../constants/data';


export default function Services({ activeTab, setActiveTab, onBookClick, onMinorCategoryClick }) {
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.3 }
    );
    if (introRef.current) {
      observer.observe(introRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="animated-stats-container" ref={introRef}>
          <div className="stats-watermark">EST 2009</div>
          <div className="stat-slide right">
            <span className="orange-text">15</span> YEARS. <span className="orange-text">2000+</span> WEDDINGS.
          </div>
          <div className="stat-slide left">
            ACROSS <span className="italic-accent">MAHARASHTRA.</span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="services-tabs">
          {Object.keys(SERVICES).map((key) => (
            <button 
              key={key}
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {SERVICES[key].title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab Content Pane */}
        <div className="tab-content">
          <div className="tab-panel active tab-fade">
            <div className="service-showcase">
              <div className="showcase-img-container">
                <img src={SERVICES[activeTab].image} alt={`${SERVICES[activeTab].title} Signature Work`} />
                <span className="signature-tag">SIGNATURE</span>
              </div>
              <div className="showcase-details">
                <h3 className="serif-subtitle">{SERVICES[activeTab].title}</h3>
                <p className="showcase-text">
                  {SERVICES[activeTab].desc}
                </p>
                <button className="btn-link" onClick={() => onBookClick(activeTab)}>
                  <span>ENQUIRE NOW</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" className="link-arrow">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minor Services Grid */}
        <div className="service-grid-header">
          <span className="grid-sub">GENRES WE SPECIALIZE IN</span>
        </div>
        <div className="service-grid">
          {MINOR_SERVICES.map((item, idx) => (
            <Link
              key={idx}
              to={`/service/${item.slug}`}
              className="service-card-minor"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="card-minor-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
