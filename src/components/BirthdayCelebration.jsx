import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sanitizeText } from '../data/config';

export default function BirthdayCelebration({ config, onNext }) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isTodayOrPast, setIsTodayOrPast] = useState(true);

  const celebrationData = config?.celebration || {};
  const girlfriendName = sanitizeText(config?.girlfriend?.name, "Prachi");
  const nickname = sanitizeText(config?.girlfriend?.nickname, "Cappuccino");

  // Determine countdown vs birthday celebration
  useEffect(() => {
    const calculateTime = () => {
      const birthDateStr = config?.birthdayDate || "2004-10-10";
      const now = new Date();
      
      // Parse month and day from config
      const parts = birthDateStr.split(/[-/]/);
      let targetMonth = 9; // 0-indexed (Oct is 9)
      let targetDay = 10;
      if (parts.length >= 3) {
        // If YYYY-MM-DD
        if (parts[0].length === 4) {
          targetMonth = parseInt(parts[1], 10) - 1;
          targetDay = parseInt(parts[2], 10);
        } else {
          // MM/DD/YYYY
          targetMonth = parseInt(parts[0], 10) - 1;
          targetDay = parseInt(parts[1], 10);
        }
      }

      const currentYear = now.getFullYear();
      let targetDate = new Date(currentYear, targetMonth, targetDay, 0, 0, 0);

      // Check if today is the birthday (matching month and day)
      const isBirthdayToday = now.getMonth() === targetMonth && now.getDate() === targetDay;

      // If the birthday is earlier in the year or today, we celebrate!
      if (isBirthdayToday || now >= targetDate) {
        setIsTodayOrPast(true);
        setTimeLeft(null);
      } else {
        // Future countdown in the current year
        const diff = targetDate.getTime() - now.getTime();
        if (diff <= 0) {
          setIsTodayOrPast(true);
          setTimeLeft(null);
        } else {
          setIsTodayOrPast(false);
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          setTimeLeft({ days, hours, minutes, seconds });
        }
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [config?.birthdayDate]);

  const handleBlowCandles = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);

    // Fire cute confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#F8DDE5', '#EFA7B5', '#7A2848', '#D8B77A']
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="stage-wrapper celebration-screen" style={{ textAlign: 'center' }}>
      <div className="tag-badge">
        <span>🎂</span>
        <span>The Big Day</span>
      </div>

      <h2 className="heading-display">
        {celebrationData.celebrationTitle || "Today, the world celebrates someone very special... 🎂"}
      </h2>

      <div style={{ margin: '0.5rem auto 1.5rem auto' }}>
        <span
          className="heading-handwritten"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
            color: 'var(--color-deep-burgundy)',
            textShadow: '0 2px 10px rgba(239, 167, 181, 0.4)',
            display: 'inline-block',
            animation: 'softPromptPulse 2s infinite ease-in-out'
          }}
        >
          {celebrationData.revealText || "That's YOU! 🥹❤️"}
        </span>
      </div>

      {/* If countdown applies */}
      {!isTodayOrPast && timeLeft && (
        <div className="card-romantic" style={{ maxWidth: '480px', margin: '0 auto 1.75rem auto', padding: '1.25rem' }}>
          <p style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)', marginBottom: '0.75rem' }}>
            {celebrationData.countdownTitle || "Counting down to your special day... ⏳💖"}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            <div style={timerBoxStyle}>
              <span style={timerNumStyle}>{timeLeft.days}</span>
              <span style={timerLabelStyle}>Days</span>
            </div>
            <div style={timerBoxStyle}>
              <span style={timerNumStyle}>{timeLeft.hours}</span>
              <span style={timerLabelStyle}>Hours</span>
            </div>
            <div style={timerBoxStyle}>
              <span style={timerNumStyle}>{timeLeft.minutes}</span>
              <span style={timerLabelStyle}>Mins</span>
            </div>
            <div style={timerBoxStyle}>
              <span style={timerNumStyle}>{timeLeft.seconds}</span>
              <span style={timerLabelStyle}>Secs</span>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Birthday Cake */}
      <div 
        onClick={handleBlowCandles}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleBlowCandles()}
        aria-label="Tap birthday cake to blow out candles and make a wish"
        style={{ cursor: 'pointer', margin: '1rem auto 1.5rem auto', display: 'inline-block' }}
        title="Tap to blow out candles!"
      >
        <div style={{ position: 'relative', width: '220px', height: '170px', margin: '0 auto' }}>
          {/* Cake Candles */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '22px', position: 'absolute', top: '15px', width: '100%', zIndex: 5 }}>
            {[1, 2, 3].map((c) => (
              <div key={c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Flame */}
                <div
                  className={`candle-flame ${candlesBlown ? 'is-blown' : ''}`}
                  style={{
                    width: '12px',
                    height: '18px',
                    background: 'radial-gradient(ellipse at 50% 60%, #fff 20%, #ffcf40 50%, #ff5252 90%)',
                    borderRadius: '50% 50% 20% 20%',
                    marginBottom: '2px',
                  }}
                />
                {/* Candle body */}
                <div
                  style={{
                    width: '10px',
                    height: '35px',
                    background: 'repeating-linear-gradient(45deg, #FFF, #FFF 4px, #EFA7B5 4px, #EFA7B5 8px)',
                    borderRadius: '3px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Cake Layers SVG */}
          <svg viewBox="0 0 200 130" style={{ position: 'absolute', bottom: '0', width: '100%', height: '120px' }}>
            {/* Cake Stand / Plate */}
            <ellipse cx="100" cy="120" rx="95" ry="8" fill="#ecd0dc" />
            
            {/* Bottom tier */}
            <rect x="25" y="65" width="150" height="50" rx="8" fill="#F8DDE5" />
            <path d="M 25 65 Q 40 75 55 65 Q 70 75 85 65 Q 100 75 115 65 Q 130 75 145 65 Q 160 75 175 65 L 175 75 Q 160 85 145 75 Q 130 85 115 75 Q 100 85 85 75 Q 70 85 55 75 Q 40 85 25 75 Z" fill="#FFF8F0" />
            
            {/* Top tier */}
            <rect x="45" y="25" width="110" height="42" rx="6" fill="#FFF8F0" stroke="#EFA7B5" strokeWidth="1" />
            {/* Frosting drips */}
            <path d="M 45 35 Q 55 45 65 35 Q 75 45 85 35 Q 95 45 105 35 Q 115 45 125 35 Q 135 45 145 35 Q 155 45 155 35 L 155 25 L 45 25 Z" fill="#EFA7B5" />
            
            {/* Berries on cake */}
            <circle cx="70" cy="24" r="5" fill="#7A2848" />
            <circle cx="100" cy="24" r="5" fill="#7A2848" />
            <circle cx="130" cy="24" r="5" fill="#7A2848" />
          </svg>
        </div>

        <p style={{ marginTop: '0.5rem', fontSize: '0.92rem', color: candlesBlown ? '#7A2848' : 'var(--color-text-muted)', fontWeight: 600 }}>
          {candlesBlown ? celebrationData.wishedText || "May every single wish you make come true today! 🌟💖" : celebrationData.wishPrompt || "Tap the cake to blow out candles and make a wish! 🕯️✨"}
        </p>
      </div>

      <p className="subheading" style={{ margin: '0 auto 1.75rem auto' }}>
        {celebrationData.subtext || "Another year brighter, sweeter, and more wonderful. Here's to celebrating you!"}
      </p>

      {/* Continue */}
      <div>
        <button
          onClick={onNext}
          className="btn-primary"
          aria-label="Continue to memory gallery"
        >
          <span>{celebrationData.buttonText || "See Our Memories Next →"}</span>
        </button>
      </div>
    </div>
  );
}

const timerBoxStyle = {
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '12px',
  padding: '8px 4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 2px 8px rgba(122, 40, 72, 0.08)',
};

const timerNumStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.6rem',
  fontWeight: 700,
  color: 'var(--color-deep-burgundy)',
  lineHeight: 1.1,
};

const timerLabelStyle = {
  fontSize: '0.7rem',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  textTransform: 'uppercase',
};
