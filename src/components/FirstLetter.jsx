import React, { useState, useEffect } from 'react';
import { sanitizeText } from '../data/config';

export default function FirstLetter({ config, onNext }) {
  const [revealedLines, setRevealedLines] = useState(1);
  const letterData = config?.firstLetter || {};
  const contentLines = letterData.content || [
    "Hey, my favorite person... 🥹❤️",
    "Before you open anything else, I just want you to know that someone put a little extra love into making this special for you.",
    "Today is all about you, your beautiful smile, your happiness, and all the little things that make you so incredibly special to me.",
    "So take your time, birthday girl. There are a few little surprises waiting for you. 💌"
  ];

  // Gradually reveal lines one by one
  useEffect(() => {
    if (revealedLines < contentLines.length) {
      const timer = setTimeout(() => {
        setRevealedLines((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [revealedLines, contentLines.length]);

  const handleContinue = () => {
    // If not all lines are revealed, visitor clicking continue reveals all instantly or advances
    if (revealedLines < contentLines.length) {
      setRevealedLines(contentLines.length);
    } else {
      onNext();
    }
  };

  const nickname = sanitizeText(config?.girlfriend?.nickname, "Cappuccino");

  return (
    <div className="stage-wrapper first-letter-screen">
      <div className="tag-badge">
        <span>💌</span>
        <span>A Little Note For You</span>
      </div>

      <h2 className="heading-display" style={{ marginBottom: '1.25rem' }}>
        {letterData.title || "Before we begin..."}
      </h2>

      {/* Romantic Paper Letter */}
      <div
        className="card-paper"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '2.5rem 2rem',
          margin: '0 auto 2rem auto',
          position: 'relative',
        }}
      >
        {/* Decorative corner stamps */}
        <div style={{ position: 'absolute', top: '14px', right: '18px', fontSize: '1.4rem', opacity: 0.8 }}>
          🌸
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {contentLines.slice(0, revealedLines).map((line, index) => (
            <p
              key={index}
              className="heading-handwritten"
              style={{
                fontSize: index === 0 ? '1.85rem' : '1.45rem',
                lineHeight: '1.5',
                color: 'var(--color-text-dark)',
                animation: 'stageFadeIn 0.5s ease-out forwards',
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {revealedLines < contentLines.length && (
          <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
            <button
              onClick={() => setRevealedLines(contentLines.length)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-rose-pink-dark)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Show entire note ⚡
            </button>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={handleContinue}
          className="btn-primary"
          aria-label="Continue to next birthday surprise stage"
        >
          <span>{revealedLines < contentLines.length ? "Read Note & Continue 💗" : (letterData.buttonText || "Continue, birthday girl 💗")}</span>
        </button>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          Surprise 2 of 8 ✨
        </span>
      </div>
    </div>
  );
}
