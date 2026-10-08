import React, { useMemo } from 'react';

/**
 * FloatingHearts renders subtle, non-intrusive floating hearts
 * and sparkles drifting across the background.
 */
export default function FloatingHearts() {
  // Generate random static values for smooth, consistent CSS keyframe drifting
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => {
      const left = Math.random() * 96 + 2; // 2% to 98%
      const duration = 12 + Math.random() * 14; // 12s to 26s
      const delay = Math.random() * 10; // 0s to 10s
      const size = 14 + Math.random() * 18; // 14px to 32px
      const driftX = (Math.random() - 0.5) * 80; // -40px to +40px
      const driftRot = (Math.random() - 0.5) * 90;
      const opacity = 0.25 + Math.random() * 0.35;
      const isSparkle = index % 3 === 0;

      return {
        id: index,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        size: `${size}px`,
        driftX: `${driftX}px`,
        driftRot: `${driftRot}deg`,
        opacity,
        isSparkle
      };
    });
  }, []);

  return (
    <div className="floating-hearts-layer" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart-item"
          style={{
            left: h.left,
            animationDuration: h.duration,
            animationDelay: h.delay,
            fontSize: h.size,
            opacity: h.opacity,
            '--drift-x': h.driftX,
            '--drift-rot': h.driftRot,
          }}
        >
          {h.isSparkle ? '✨' : '💖'}
        </span>
      ))}
    </div>
  );
}
