import React from 'react';

export default function Toast({ isVisible, message }) {
  return (
    <div className={`toast ${isVisible ? 'show' : ''}`}>
      <span className="toast-icon">✓</span>
      <span className="toast-text">{message}</span>
    </div>
  );
}
