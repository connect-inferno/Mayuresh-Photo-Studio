import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function IntroLanding({ onComplete }) {
  const [phase, setPhase] = useState('splash'); // 'splash' | 'playing' | 'fading'
  const videoRef = useRef(null);

  const startVideo = () => {
    setPhase('playing');
  };

  const handleSkip = useCallback(() => {
    setPhase('fading');
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setTimeout(() => {
      onComplete();
    }, 800);
  }, [onComplete]);

  useEffect(() => {
    if (phase === 'playing' && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Video play failed: ", err);
        // Fallback: if browser still blocks it, just skip
        handleSkip();
      });
    }
  }, [phase, handleSkip]);

  const handleEnded = useCallback(() => {
    setPhase('fading');
    setTimeout(() => {
      onComplete();
    }, 800); // match transition duration
  }, [onComplete]);

  return (
    <div className={`intro-overlay phase-${phase}`}>
      {phase === 'splash' && (
        <div className="intro-splash-content">
          <div className="intro-brand-container">
            <span className="intro-badge">SANGLI, MAHARASHTRA</span>
            <h1 className="intro-title">
              MAYURESH <br />
              <span className="italic-accent">Photo Studio</span>
            </h1>
            <div className="intro-divider"></div>
            <p className="intro-subtitle">Capturing moments, creating legacy since 2009.</p>
          </div>

          <div className="intro-actions-container">
            <button className="btn btn-primary intro-btn" onClick={startVideo}>
              <span>ENTER WITH SOUND</span>
              <svg viewBox="0 0 24 24" width="18" height="18" className="play-icon">
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="intro-skip-link" onClick={handleSkip}>
              Skip Intro
            </button>
          </div>
        </div>
      )}

      {phase === 'playing' && (
        <div className="intro-video-container">
          <video
            ref={videoRef}
            src="/mayuresh_logo.mp4"
            className="intro-video-player"
            playsInline
            onEnded={handleEnded}
          />
          <button className="intro-video-skip-btn" onClick={handleSkip}>
            <span>SKIP VIDEO</span>
            <svg viewBox="0 0 24 24" width="16" height="16" className="skip-arrow">
              <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
