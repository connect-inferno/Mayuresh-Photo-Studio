import React, { useState, useEffect } from 'react';

export default function Header({ onBookClick }) {
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderShrunk(true);
      } else {
        setIsHeaderShrunk(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${isHeaderShrunk ? 'shrink' : ''}`}>
        <div className="container header-container">
          <a href="#" className="logo">
            <svg className="camera-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
            <span>Lumina<span> Photography</span></span>
          </a>

          {/* Hamburger Icon */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} 
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Nav Links */}
          <nav className="nav-menu">
            <ul>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#portfolio">PORTFOLIO</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#reviews">REVIEWS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>

          {/* CTA Header Button */}
          <button className="btn btn-primary btn-book-now" onClick={() => onBookClick('portraits')}>
            <svg viewBox="0 0 24 24" width="18" height="18" className="btn-icon">
              <path fill="currentColor" d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27 11.72 11.72 0 0 0 3.7.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.7 1 1 0 0 1-.27 1.11z"/>
            </svg>
            <span>BOOK NOW</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <ul>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a></li>
            <li><a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>PORTFOLIO</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>REVIEWS</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a></li>
            <li>
              <button 
                className="btn btn-primary btn-block" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick('portraits');
                }}
              >
                BOOK A SESSION
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
