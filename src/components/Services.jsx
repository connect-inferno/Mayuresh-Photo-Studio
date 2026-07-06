import React from 'react';
import { SERVICES } from '../constants/data';

export default function Services({ activeTab, setActiveTab, onBookClick, onMinorCategoryClick }) {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-intro">
          <div className="intro-left">
            <span className="section-tag">WHAT WE OFFER</span>
            <h2 className="serif-title">Every Story, Beautifully Told.</h2>
          </div>
          <div className="intro-right">
            <p className="section-para">
              From intimate newborn sessions to grand wedding productions — our studio handles every genre with the same obsessive care.
            </p>
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
          <div className="tab-panel active">
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
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('portraits')}>
            <span>Headshots & Portraits</span>
          </div>
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('newborn')}>
            <span>Baby Photography</span>
          </div>
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('wedding')}>
            <span>Bridal Photography</span>
          </div>
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('newborn')}>
            <span>Children's Photography</span>
          </div>
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('commercial')}>
            <span>Commercial Photography</span>
          </div>
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('wedding')}>
            <span>Events & Parties</span>
          </div>
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('newborn')}>
            <span>Maternity & Newborn</span>
          </div>
          <div className="service-card-minor" onClick={() => onMinorCategoryClick('portraits')}>
            <span>Passport Photography</span>
          </div>
        </div>
      </div>
    </section>
  );
}
