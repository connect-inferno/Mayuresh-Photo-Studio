import React, { useRef, useEffect } from 'react';

export default function VideoIntro({ isFading, onComplete }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Intro video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <div className={`video-intro-overlay ${isFading ? 'fade-out' : ''}`}>
      <video
        ref={videoRef}
        className="video-intro-video"
        src="/hero-video.mp4"
        autoPlay
        playsInline
        muted
        onEnded={onComplete}
      />
      <button className="video-intro-skip" onClick={onComplete}>
        Skip Intro
      </button>
    </div>
  );
}
