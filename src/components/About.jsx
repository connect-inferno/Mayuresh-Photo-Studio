import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-image-container">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Lead Photographer Alex" />
          <div className="experience-badge">
            <span className="exp-num">15+</span>
            <span className="exp-text">Years of Craft</span>
          </div>
        </div>
        
        <div className="about-content">
          <span className="section-tag">THE PHOTOGRAPHER</span>
          <h2 className="serif-title">Behind the Lens.</h2>
          <p className="about-intro-text">
            Hi, I am Alex. Since founding Mayuresh Photography in Sangli in 2009, my goal has been to transcend traditional photography and paint stories with light.
          </p>
          <p className="about-desc">
            We believe photography is not merely capturing pixels; it is preserving deep emotional bonds. Whether it is the soft whispers between a bride and groom during golden hour, the pure innocence of a newborn, or a striking headshot that captures your professional essence — our studio handles each session with visual meticulousness and custom composition.
          </p>
          
          <div className="about-qualities">
            <div className="quality-item">
              <h5>Cinematic Light</h5>
              <p>We leverage low-key ambient profiles and high-end studio strobe sculpting.</p>
            </div>
            <div className="quality-item">
              <h5>Immersive Comfort</h5>
              <p>Our studio environment is built to put clients, babies, and couples completely at ease.</p>
            </div>
          </div>

          {/* Signature pull-quote */}
          <blockquote className="about-quote">
            <p>"Every frame we shoot is a promise we keep — to make your memory last forever."</p>
            <cite>— Alex, Founder &amp; Lead Photographer</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
