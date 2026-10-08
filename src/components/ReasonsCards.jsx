import React, { useState } from 'react';

export default function ReasonsCards({ config, onNext }) {
  const [flippedMap, setFlippedMap] = useState({});

  const reasons = config?.reasons || [];
  const reasonsPrompt = config?.reasonsPrompt || "Tap each heart card to reveal what I adore about you 💌";
  const buttonText = config?.reasonsButtonText || "Read My Birthday Letter 💌";

  const totalReasons = reasons.length;
  const flippedCount = Object.values(flippedMap).filter(Boolean).length;

  const toggleCard = (id) => {
    setFlippedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleRevealAll = () => {
    const allRevealed = {};
    reasons.forEach((r) => {
      allRevealed[r.id] = true;
    });
    setFlippedMap(allRevealed);
  };

  return (
    <div className="stage-wrapper reasons-screen">
      <div className="tag-badge">
        <span>💌</span>
        <span>From the Heart</span>
      </div>

      <h2 className="heading-display">
        Reasons Why I Love You 💖
      </h2>

      <p className="subheading">
        {reasonsPrompt}
      </p>

      {/* Progress & Quick Reveal Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '780px',
          margin: '0 auto 1.5rem auto',
          padding: '0 0.5rem',
        }}
      >
        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-deep-burgundy)' }}>
          {flippedCount} of {totalReasons} reasons opened 💕
        </span>

        {flippedCount < totalReasons && (
          <button
            onClick={handleRevealAll}
            className="btn-secondary"
            style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
          >
            Reveal All Reasons 💖
          </button>
        )}
      </div>

      {/* Grid of 10 Reason Cards */}
      <div
        className="reasons-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          width: '100%',
          maxWidth: '820px',
          margin: '0 auto 2.5rem auto',
        }}
      >
        {reasons.map((item, index) => {
          const isFlipped = !!flippedMap[item.id];

          return (
            <div
              key={item.id}
              onClick={() => toggleCard(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleCard(item.id)}
              aria-label={`Reason ${index + 1}: ${item.title}. ${isFlipped ? item.text : "Click to reveal"}`}
              className={`reason-card-container ${isFlipped ? 'is-flipped' : ''}`}
            >
              <div className="reason-card-inner">
                {/* Front (Unopened) */}
                <div className="reason-card-front">
                  <span style={{ fontSize: '2rem', marginBottom: '0.35rem' }}>
                    {item.emoji || "💌"}
                  </span>
                  <p style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-deep-burgundy)' }}>
                    Reason #{index + 1}
                  </p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    Tap to open 🎀
                  </span>
                </div>

                {/* Back (Revealed Reason) */}
                <div className="reason-card-back">
                  <span style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                    {item.emoji || "💖"}
                  </span>
                  <p
                    className="heading-handwritten"
                    style={{
                      fontSize: '1.35rem',
                      lineHeight: '1.35',
                      color: 'var(--color-text-dark)',
                    }}
                  >
                    "{item.text}"
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-rose-pink-dark)', marginTop: '6px', fontWeight: 600 }}>
                    {item.title} ✨
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onNext}
          className="btn-primary"
          aria-label="Continue to Main Birthday Letter"
        >
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}
