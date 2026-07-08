import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function IntroLanding({ onComplete }) {
  const [phase, setPhase] = useState('playing'); // start directly in playing phase
  const [isMuted, setIsMuted] = useState(true); // muted by default for autoplay compliance
  const videoRef = useRef(null);

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
        // Fallback: if browser still blocks muted play, skip
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
      {phase === 'playing' && (
        <div className="intro-video-container">
          <video
            ref={videoRef}
            src="/mayuresh_logo.mp4"
            className="intro-video-player"
            playsInline
            muted={isMuted}
            autoPlay
            onEnded={handleEnded}
          />
          <button className="intro-video-mute-btn" onClick={() => setIsMuted(prev => !prev)}>
            {isMuted ? (
              <>
                <span>UNMUTE</span>
                <svg viewBox="0 0 24 24" width="16" height="16" className="mute-icon">
                  <path fill="currentColor" d="M3.63 3.63L2.22 5.05 7 9.83V19h4l5 5v-6.17l3.87 3.87c-.63.48-1.32.88-2.07 1.18v-2.06c.27-.08.53-.19.78-.33l-2.78-2.78v-4.13l-4-4L3.63 3.63zM12 17H9v-4h3l3 3v-6.17zM16.5 12c0-.85-.23-1.63-.61-2.31l1.45-1.45c.73.96 1.16 2.16 1.16 3.76s-.43 2.8-1.16 3.76l-1.45-1.45c.38-.68.61-1.46.61-2.31zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              </>
            ) : (
              <>
                <span>MUTE</span>
                <svg viewBox="0 0 24 24" width="16" height="16" className="mute-icon">
                  <path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </>
            )}
          </button>
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
