import React from 'react';

export default function Contact({ onSubmit }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="serif-title">Let's Create Together.</h2>
          <p className="contact-intro">
            Have a session in mind? Write to us or visit our studio in Kolhapur. We'd love to hear your ideas.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </div>
              <div className="detail-content">
                <h5>Studio Address</h5>
                <p>Datt Mandir, Isolation Hospital Rd, Nehru Nagar, Kolhapur, Maharashtra 416012</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27 11.72 11.72 0 0 0 3.7.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.7 1 1 0 0 1-.27 1.11z"/>
                </svg>
              </div>
              <div className="detail-content">
                <h5>Call / WhatsApp</h5>
                <p>
                  <a href="tel:+919088158186" className="contact-link">+91 098811 58186</a>
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="detail-content">
                <h5>Email Address</h5>
                <p>
                  <a href="mailto:info@xyzphotography.com" className="contact-link">info@xyzphotography.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form id="direct-contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="c-name">Full Name</label>
              <input type="text" id="c-name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="c-email">Email Address</label>
              <input type="email" id="c-email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="c-genre">Interested Service</label>
              <select id="c-genre" defaultValue="Portraits">
                <option value="Portraits">Portraits &amp; Headshots</option>
                <option value="Wedding">Wedding &amp; Bridal</option>
                <option value="Newborn">Newborn &amp; Family</option>
                <option value="Commercial">Commercial Photography</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="c-message">Tell us about your project</label>
              <textarea id="c-message" rows="4" placeholder="Share any specific dates, concepts, or themes you are looking for..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}
