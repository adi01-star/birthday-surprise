import React from 'react';
import { sanitizeText } from '../data/config';

export default function BirthdayLetter({ config, onNext }) {
  const letter = config?.mainLetter || {};
  const paragraphs = letter.paragraphs || [];
  const senderNickname = sanitizeText(config?.sender?.nickname, "Burrito");

  return (
    <div className="stage-wrapper birthday-letter-screen">
      <div className="tag-badge">
        <span>📜</span>
        <span>My Birthday Letter To You</span>
      </div>

      <h2 className="heading-display" style={{ marginBottom: '1.5rem' }}>
        A Letter From My Heart 💌
      </h2>

      {/* Main Parchment Letter Card */}
      <article
        className="card-paper"
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '3rem 2.25rem',
          margin: '0 auto 2.5rem auto',
          position: 'relative',
        }}
      >
        {/* Floral and Heart Header Stamp */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '2rem' }}>🌸 🕊️ 🌸</span>
          <div className="romantic-divider" />
        </div>

        {/* Salutation */}
        <h3
          className="heading-handwritten"
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.7rem)',
            color: 'var(--color-deep-burgundy)',
            marginBottom: '1.5rem',
            textAlign: 'left',
          }}
        >
          {letter.salutation || "Happy Birthday, my love. ❤️🎂"}
        </h3>

        {/* Letter Paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          {paragraphs.map((para, index) => (
            <p
              key={index}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                lineHeight: '1.7',
                color: '#3a1624',
                textAlign: 'left',
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Signature Section */}
        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(239, 167, 181, 0.4)',
            textAlign: 'right',
          }}
        >
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
            {letter.closing || "With all my love,"}
          </p>
          <p
            className="heading-handwritten"
            style={{
              fontSize: '2.6rem',
              color: 'var(--color-deep-burgundy)',
              marginTop: '4px',
            }}
          >
            {senderNickname} ❤️
          </p>
        </div>
      </article>

      {/* Continue */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onNext}
          className="btn-primary"
          aria-label="Continue to interactive birthday gift"
        >
          <span>{letter.buttonText || "There's a Gift for You 🎁"}</span>
        </button>
      </div>
    </div>
  );
}
