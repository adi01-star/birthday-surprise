import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sanitizeText } from '../data/config';

export default function FinalSurprise({ config, onReplay, onGoToLetter }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const finalData = config?.finalSurprise || {};
  const nickname = sanitizeText(config?.girlfriend?.nickname, "Cappuccino");
  const finalMessage = finalData.finalMessage || [
    "If I could give you one thing today, I would give you the ability to see yourself through my eyes.",
    "Then you would finally understand how incredibly special you are to me. ❤️",
    "No matter how far apart we may be at a particular moment, I hope this little corner of the internet reminds you that you are thought of, appreciated, and loved.",
    "Happy Birthday, my beautiful girl. 🎂💗"
  ];

  const triggerGrandConfetti = () => {
    try {
      // Grand celebratory multi-angle confetti
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#F8DDE5', '#EFA7B5', '#7A2848', '#D8B77A', '#FFF8F0'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    } catch (e) {
      // safe fallback
    }
  };

  const handleReveal = () => {
    setIsRevealed(true);
    triggerGrandConfetti();
  };

  return (
    <div className="stage-wrapper final-surprise-screen" style={{ textAlign: 'center' }}>
      {!isRevealed ? (
        /* Pre-reveal teaser */
        <div style={{ animation: 'stageFadeIn 0.6s ease-out' }}>
          <div className="tag-badge">
            <span>✨</span>
            <span>The Grand Finale</span>
          </div>

          <h2 className="heading-display" style={{ marginBottom: '1.25rem' }}>
            {finalData.teaserTitle || "Wait... there's one more thing. 👀💌"}
          </h2>

          <p className="subheading" style={{ margin: '0 auto 2rem auto' }}>
            Before you go, there is one last romantic wish I have to share with you.
          </p>

          <button
            onClick={handleReveal}
            className="btn-primary"
            style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}
            aria-label="Reveal the final birthday surprise"
          >
            <span>{finalData.revealButtonText || "One Last Surprise ❤️"}</span>
          </button>
        </div>
      ) : (
        /* Revealed grand romantic finale */
        <div style={{ width: '100%', maxWidth: '720px', animation: 'stageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="tag-badge">
            <span>💖</span>
            <span>Always & Forever</span>
          </div>

          {/* Grand Heading */}
          <h1
            className="heading-handwritten"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: 'var(--color-deep-burgundy)',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              textShadow: '0 4px 15px rgba(239, 167, 181, 0.5)',
            }}
          >
            {finalData.highlightGreeting || `HAPPY BIRTHDAY, ${nickname.toUpperCase()}! ❤️🎂`}
          </h1>

          {/* Romantic Final Message Card */}
          <div
            className="card-romantic"
            style={{
              padding: '2.75rem 2rem',
              marginBottom: '2rem',
              boxShadow: '0 20px 45px rgba(122, 40, 72, 0.18)',
              border: '2px solid rgba(239, 167, 181, 0.5)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              {finalMessage.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
                    lineHeight: '1.65',
                    color: 'var(--color-text-dark)',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="romantic-divider" />

            <p
              className="heading-handwritten"
              style={{
                fontSize: '2rem',
                color: 'var(--color-deep-burgundy)',
                marginTop: '1rem',
              }}
            >
              {finalData.finalSignature || "Made with all my love, just for you. 💌"}
            </p>
          </div>

          {/* Action buttons: Replay and Read Letter */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <button
              onClick={onReplay}
              className="btn-primary"
              aria-label="Replay birthday surprise experience from start"
            >
              <span>{finalData.replayButtonText || "Replay Experience From Start ↺"}</span>
            </button>

            <button
              onClick={onGoToLetter}
              className="btn-secondary"
              aria-label="Read birthday letter again"
            >
              <span>{finalData.readLetterAgainText || "Read Birthday Letter Again 📜"}</span>
            </button>
          </div>

          {/* Sweet Footer */}
          <footer style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
            <p>{finalData.footerText || "A little piece of my heart, made just for you. ❤️"}</p>
          </footer>
        </div>
      )}
    </div>
  );
}
