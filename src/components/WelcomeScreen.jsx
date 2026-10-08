import React, { useState } from 'react';
import Envelope from './Envelope';
import { sanitizeText } from '../data/config';

export default function WelcomeScreen({ config, onComplete }) {
  const [isOpening, setIsOpening] = useState(false);

  const nickname = sanitizeText(config?.girlfriend?.nickname, "Cappuccino");
  const girlfriendName = sanitizeText(config?.girlfriend?.name, "Prachi");
  const welcomeData = config?.welcome || {};

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Give time for flap to rotate and letter to slide up before transitioning
    setTimeout(() => {
      onComplete();
    }, 1400);
  };

  return (
    <div className="stage-wrapper welcome-screen" style={{ textAlign: 'center' }}>
      <div className="tag-badge">
        <span>✨</span>
        <span>{welcomeData.topTag || "A little something made just for you..."}</span>
      </div>

      <h1 className="heading-display">
        {welcomeData.heading || "Your Birthday Surprise Awaits 💌"}
      </h1>

      <p className="subheading">
        For my favorite person, <strong>{nickname || girlfriendName}</strong>. {welcomeData.subtitle || "Because the sweetest person deserves a little extra magic today."}
      </p>

      {/* 3D Envelope */}
      <Envelope 
        isOpen={isOpening} 
        onOpen={handleOpen} 
        nickname={nickname}
      />

      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <p className="pulse-prompt" style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
          {welcomeData.tapPrompt || "Tap the envelope to begin ✨"}
        </p>

        <button
          onClick={handleOpen}
          disabled={isOpening}
          className="btn-primary"
          aria-label="Open your surprise envelope"
        >
          <span>{isOpening ? "Opening for you... 💌" : (welcomeData.openButtonText || "Open Your Surprise 💗")}</span>
        </button>
      </div>
    </div>
  );
}
