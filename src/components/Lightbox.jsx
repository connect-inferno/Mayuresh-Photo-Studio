import React, { useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../constants/data';

export default function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (index === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;

  return (
    <div className="lightbox-modal open" onClick={onClose}>
      <span className="lightbox-close" onClick={onClose}>&times;</span>
      <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&lt;</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={PORTFOLIO_ITEMS[index].image} alt={PORTFOLIO_ITEMS[index].title} />
        <div className="lightbox-caption">{PORTFOLIO_ITEMS[index].title} - {PORTFOLIO_ITEMS[index].category}</div>
      </div>
      <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>&gt;</button>
    </div>
  );
}
