import React, { useState } from 'react';

/**
 * Envelope component with layered SVG/CSS flaps, 3D flap unfold,
 * heart seal, rising letter, and floating burst particles.
 */
export default function Envelope({ isOpen, onOpen, nickname = "Cappuccino" }) {
  const [burstParticles, setBurstParticles] = useState([]);

  const handleTriggerOpen = (e) => {
    e.preventDefault();
    if (isOpen) return;

    // Trigger burst heart particles
    const particles = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const distance = 80 + Math.random() * 50;
      return {
        id: i,
        x: `${Math.cos(angle) * distance}px`,
        y: `${Math.sin(angle) * distance - 40}px`,
        rot: `${(Math.random() - 0.5) * 60}deg`
      };
    });
    setBurstParticles(particles);

    onOpen();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleTriggerOpen(e);
    }
  };

  return (
    <div className="envelope-stage">
      <div
        className={`envelope-container ${isOpen ? 'is-open' : ''}`}
        onClick={handleTriggerOpen}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Open birthday surprise envelope"
        aria-expanded={isOpen}
      >
        <div className="envelope-wrapper">
          {/* Inner Letter that slides out */}
          <div className="envelope-letter" aria-hidden={!isOpen}>
            <div className="letter-preview-title">For {nickname} 💌</div>
            <div className="letter-preview-sub">Tap to read what's inside ✨</div>
          </div>

          {/* Left, Right & Bottom Envelope Pockets */}
          <div className="envelope-pocket-left" />
          <div className="envelope-pocket-right" />
          <div className="envelope-pocket-bottom" />

          {/* Triangular Top Flap */}
          <div className="envelope-top-flap" />

          {/* Heart Seal */}
          <div className="envelope-heart-seal" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          {/* Floating burst hearts on click */}
          {burstParticles.map((p) => (
            <span
              key={p.id}
              className="envelope-burst-heart"
              style={{
                top: '50%',
                left: '50%',
                '--burst-x': p.x,
                '--burst-y': p.y,
                '--burst-r': p.rot,
              }}
            >
              💖
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
