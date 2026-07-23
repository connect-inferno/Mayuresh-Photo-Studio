import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 4.9, label: 'GOOGLE RATING', suffix: '', decimals: 1 },
  { value: 226, label: 'HAPPY REVIEWS', suffix: '+', decimals: 0 },
  { value: 2000, label: 'SESSIONS DONE', suffix: '+', decimals: 0 },
  { value: 15, label: 'YEARS IN KOLHAPUR', suffix: '+', decimals: 0 },
];

function useCountUp(target, decimals, duration = 1800) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [triggered, target, decimals, duration]);

  return { ref, count };
}

function StatItem({ stat }) {
  const { ref, count } = useCountUp(stat.value, stat.decimals);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number-row">
        <span className="stat-number">
          {stat.decimals > 0 ? count.toFixed(stat.decimals) : count.toLocaleString()}
        </span>
        <span className="stat-dot">{stat.suffix || '.'}</span>
      </div>
      <div className="stat-text-label">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid-layout">
        <div className="stats-editorial">
          <span className="section-tag">OUR JOURNEY IN NUMBERS</span>
          <h2 className="serif-title">Trust, Expertise, and Artistry.</h2>
          <p className="stats-desc">
            Since 2009, XYZ Photography has been Kolhapur's trusted destination for high-end photography. 
            We blend classic camera techniques with modern styling to craft milestones that endure.
          </p>
        </div>
        <div className="stats-numbers-grid">
          {STATS.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
