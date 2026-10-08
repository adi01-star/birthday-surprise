import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function GiftReveal({ config, onNext }) {
  const [isOpened, setIsOpened] = useState(false);

  const giftData = config?.gift || {};
  const messageLines = giftData.message || [
    "If hugs could travel through screens, you would be getting the biggest one right now. 🫂❤️",
    "Consider this your unlimited coupon for hugs, cuddles, silly conversations, and being reminded that you're loved. Redeemable whenever you want. No expiry date. 😌💗"
  ];

  const handleOpenGift = () => {
    if (isOpened) return;
    setIsOpened(true);

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F8DDE5', '#EFA7B5', '#7A2848', '#D8B77A', '#FFF8F0']
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="stage-wrapper gift-screen" style={{ textAlign: 'center' }}>
      <div className="tag-badge">
        <span>🎁</span>
        <span>A Special Gift</span>
      </div>

      <h2 className="heading-display">
        A Special Delivery For You 🎀
      </h2>

      <p className="subheading">
        {giftData.teaserText || "Okay, birthday girl... one last little gift before the final surprise. 🎁"}
      </p>

      {/* Interactive 3D Gift Box */}
      <div
        className={`gift-box-wrapper ${isOpened ? 'is-opened' : ''}`}
        onClick={handleOpenGift}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenGift()}
        aria-label="Tap to unwrap birthday gift"
        title="Tap to unwrap!"
      >
        {/* Ribbon Bow */}
        <div className="gift-bow">
          <svg width="60" height="40" viewBox="0 0 60 40">
            <path d="M30 25 C15 5 5 15 15 25 C25 35 30 25 30 25 Z" fill="#D8B77A" />
            <path d="M30 25 C45 5 55 15 45 25 C35 35 30 25 30 25 Z" fill="#D8B77A" />
            <circle cx="30" cy="25" r="7" fill="#c49e5d" />
          </svg>
        </div>

        {/* Gift Lid */}
        <div className="gift-lid">
          <div className="gift-ribbon-v" />
        </div>

        {/* Gift Body */}
        <div className="gift-body">
          <div className="gift-ribbon-v" />
          <div className="gift-ribbon-h" />
          <span style={{ fontSize: '2.5rem', zIndex: 4 }}>💝</span>
        </div>
      </div>

      {!isOpened ? (
        <p className="pulse-prompt" style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600, marginTop: '0.75rem' }}>
          {giftData.tapInstruction || "Tap the present to unwrap 🎀"}
        </p>
      ) : (
        /* Revealed Gift Coupon */
        <div
          className="card-paper"
          style={{
            maxWidth: '560px',
            width: '100%',
            margin: '1.5rem auto 2rem auto',
            padding: '2rem 1.75rem',
            border: '2px dashed var(--color-rose-pink)',
            animation: 'stageFadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            boxShadow: '0 12px 35px rgba(122, 40, 72, 0.15)',
          }}
        >
          <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🎫✨</div>
          <h3
            className="heading-handwritten"
            style={{
              fontSize: '2.2rem',
              color: 'var(--color-deep-burgundy)',
              marginBottom: '1rem',
            }}
          >
            {giftData.unwrappedTitle || "Your Unlimited Love Coupon 🎫💝"}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {messageLines.map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  lineHeight: '1.55',
                  color: 'var(--color-text-dark)',
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--color-rose-pink-dark)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Valid: Forever and Always • Signed with love
          </div>
        </div>
      )}

      {/* Button to proceed to Final Surprise */}
      {isOpened && (
        <div style={{ marginTop: '1.5rem', animation: 'stageFadeIn 0.5s ease-out' }}>
          <button
            onClick={onNext}
            className="btn-primary"
            aria-label="Continue to final surprise"
          >
            <span>{giftData.buttonText || "One Last Surprise ❤️"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
