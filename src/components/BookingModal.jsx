import React from 'react';

export default function BookingModal({ isOpen, onClose, genre, setGenre, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="modal open" onClick={onClose}>
      <div className="modal-content animate-slide" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h3 className="serif-subtitle">Book Your Session</h3>
          <p>Choose your style, select a date, and let us bring your vision to life.</p>
        </div>
        <form id="booking-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="b-name">Your Full Name</label>
              <input type="text" id="b-name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="b-email">Email Address</label>
              <input type="email" id="b-email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="b-phone">Phone Number</label>
              <input type="tel" id="b-phone" placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="form-group">
              <label htmlFor="b-date">Preferred Date</label>
              <input type="date" id="b-date" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="b-genre">Photography Genre</label>
            <select 
              id="b-genre" 
              value={genre} 
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="portraits">Portraits & Headshots</option>
              <option value="wedding">Wedding & Bridal Photography</option>
              <option value="newborn">Newborn & Family Session</option>
              <option value="commercial">Commercial & Corporate shoot</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="b-notes">Special Instructions / Ideas</label>
            <textarea id="b-notes" rows="3" placeholder="Tell us about the theme, outfit planning, or specific request..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">CONFIRM BOOKING REQUEST</button>
        </form>
      </div>
    </div>
  );
}
