import React, { useState, useEffect } from 'react';
import { config, sanitizeText } from './data/config';

// Components
import WelcomeScreen from './components/WelcomeScreen';
import FirstLetter from './components/FirstLetter';
import BirthdayCelebration from './components/BirthdayCelebration';
import MemoryGallery from './components/MemoryGallery';
import ReasonsCards from './components/ReasonsCards';
import BirthdayLetter from './components/BirthdayLetter';
import GiftReveal from './components/GiftReveal';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import FloatingHearts from './components/FloatingHearts';
import ProgressIndicator from './components/ProgressIndicator';

export default function App() {
  const [currentStage, setCurrentStage] = useState(1);
  const [maxUnlockedStage, setMaxUnlockedStage] = useState(1);

  // Set document title dynamically based on config
  useEffect(() => {
    const herName = sanitizeText(config?.girlfriend?.name, "Prachi");
    document.title = `A Birthday Surprise For ${herName} 💌`;
  }, []);

  const goToStage = (stageNum) => {
    setCurrentStage(stageNum);
    if (stageNum > maxUnlockedStage) {
      setMaxUnlockedStage(stageNum);
    }
    // Scroll window smoothly to top upon stage changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextStage = () => {
    goToStage(Math.min(currentStage + 1, 8));
  };

  const handleReplay = () => {
    goToStage(1);
  };

  const handleGoToLetter = () => {
    goToStage(6);
  };

  const girlfriendNickname = sanitizeText(config?.girlfriend?.nickname, "Cappuccino");

  return (
    <div className="app-container">
      {/* Background Floating Hearts & Sparkles */}
      <FloatingHearts />

      {/* Header bar with Brand Pill & Floating Music Player */}
      <header className="site-header">
        <div className="brand-pill">
          <span>💌</span>
          <span>For {girlfriendNickname}</span>
        </div>

        {/* Music Player */}
        <MusicPlayer musicConfig={config.music} />
      </header>

      {/* Main Stage Content */}
      <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentStage === 1 && (
          <WelcomeScreen
            config={config}
            onComplete={() => goToStage(2)}
          />
        )}

        {currentStage === 2 && (
          <FirstLetter
            config={config}
            onNext={handleNextStage}
          />
        )}

        {currentStage === 3 && (
          <BirthdayCelebration
            config={config}
            onNext={handleNextStage}
          />
        )}

        {currentStage === 4 && (
          <MemoryGallery
            config={config}
            onNext={handleNextStage}
          />
        )}

        {currentStage === 5 && (
          <ReasonsCards
            config={config}
            onNext={handleNextStage}
          />
        )}

        {currentStage === 6 && (
          <BirthdayLetter
            config={config}
            onNext={handleNextStage}
          />
        )}

        {currentStage === 7 && (
          <GiftReveal
            config={config}
            onNext={handleNextStage}
          />
        )}

        {currentStage === 8 && (
          <FinalSurprise
            config={config}
            onReplay={handleReplay}
            onGoToLetter={handleGoToLetter}
          />
        )}
      </main>

      {/* Progress Dots Bar */}
      <ProgressIndicator
        currentStage={currentStage}
        maxUnlockedStage={maxUnlockedStage}
        onSelectStage={goToStage}
      />
    </div>
  );
}
