import React from 'react';

const STAGE_LABELS = [
  "Surprise Envelope",
  "A Little Note",
  "Celebration",
  "Memory Gallery",
  "Reasons Why",
  "Birthday Letter",
  "Special Gift",
  "Final Surprise"
];

export default function ProgressIndicator({ currentStage, maxUnlockedStage, onSelectStage }) {
  // If at stage 1 (Envelope), show subtle or let it be unobtrusive
  return (
    <nav 
      className="progress-indicator-bar" 
      aria-label="Surprise progress"
      style={barContainerStyle}
    >
      <div style={innerStyle}>
        {STAGE_LABELS.map((label, index) => {
          const stageNumber = index + 1;
          const isActive = currentStage === stageNumber;
          const isUnlocked = stageNumber <= maxUnlockedStage;

          return (
            <button
              key={stageNumber}
              onClick={() => isUnlocked && onSelectStage(stageNumber)}
              disabled={!isUnlocked}
              title={`${label} (${stageNumber} of ${STAGE_LABELS.length})`}
              aria-label={`${label}, Stage ${stageNumber}`}
              aria-current={isActive ? "step" : undefined}
              style={{
                ...dotStyle,
                width: isActive ? '28px' : '9px',
                borderRadius: isActive ? '12px' : '50%',
                background: isActive 
                  ? 'linear-gradient(135deg, #7A2848, #a23861)' 
                  : isUnlocked 
                  ? '#EFA7B5' 
                  : 'rgba(239, 167, 181, 0.35)',
                cursor: isUnlocked ? 'pointer' : 'default',
                opacity: isUnlocked ? 1 : 0.45,
                transform: isActive ? 'scale(1.15)' : 'scale(1)',
              }}
            />
          );
        })}
      </div>
      <div style={captionStyle}>
        Stage {currentStage} of 8 • {STAGE_LABELS[currentStage - 1]}
      </div>
    </nav>
  );
}

const barContainerStyle = {
  position: 'fixed',
  bottom: '12px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 40,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  pointerEvents: 'auto',
};

const innerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  padding: '6px 14px',
  borderRadius: '9999px',
  border: '1px solid rgba(239, 167, 181, 0.4)',
  boxShadow: '0 4px 15px rgba(122, 40, 72, 0.1)',
};

const dotStyle = {
  height: '9px',
  border: 'none',
  padding: 0,
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
};

const captionStyle = {
  fontSize: '0.72rem',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  letterSpacing: '0.02em',
  textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
};
