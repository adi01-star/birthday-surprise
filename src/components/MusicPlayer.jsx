import React, { useState, useEffect, useRef } from 'react';

/**
 * MusicPlayer handles audio playback gracefully.
 * - Supports custom MP3 files from public/assets/music/birthday-song.mp3
 * - Provides an optional soothing Web Audio API music-box synthesizer fallback
 *   so the website has beautiful romantic background music even before an MP3 is uploaded!
 * - Never breaks or throws uncaught exceptions if the audio fails or is missing.
 */
export default function MusicPlayer({ musicConfig }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [usingFallbackSynth, setUsingFallbackSynth] = useState(false);
  
  const audioRef = useRef(null);
  const synthTimerRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Initialize and clean up audio element
  useEffect(() => {
    const audio = new Audio();
    // Resolve relative or base path
    audio.src = musicConfig?.audioSrc || 'assets/music/birthday-song.mp3';
    audio.loop = true;
    audio.preload = 'metadata';

    const handleError = () => {
      // Audio file not found or couldn't be decoded - switch to gentle synthesizer fallback
      setAudioError(true);
      if (musicConfig?.enableSynthesizerFallback !== false) {
        setUsingFallbackSynth(true);
      }
    };

    audio.addEventListener('error', handleError);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
      stopSynth();
    };
  }, [musicConfig]);

  // Gentle Romantic Music-Box Synthesizer using Web Audio API
  const playRomanticChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Romantic chord progression frequencies (C, G, Am, F lofi music box tones)
      const notes = [
        261.63, 329.63, 392.00, 523.25, // C maj
        220.00, 261.63, 329.63, 440.00, // A min
        174.61, 220.00, 261.63, 349.23, // F maj
        196.00, 246.94, 293.66, 392.00  // G maj
      ];
      let noteIndex = 0;

      const triggerNextNote = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Music box sine wave with soft bell harmonics
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.3);

        noteIndex++;
        synthTimerRef.current = setTimeout(triggerNextNote, 650);
      };

      triggerNextNote();
    } catch (e) {
      console.warn("Synthesizer playback warning:", e);
    }
  };

  const stopSynth = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const toggleMusic = async () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !usingFallbackSynth) {
        audioRef.current.pause();
      }
      stopSynth();
      setIsPlaying(false);
    } else {
      // Play
      if (usingFallbackSynth || audioError) {
        playRomanticChime();
        setIsPlaying(true);
      } else if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          // If browser blocked or file missing, smoothly activate gentle chime
          console.log("Using gentle melody chime fallback for romantic atmosphere");
          setUsingFallbackSynth(true);
          playRomanticChime();
          setIsPlaying(true);
        }
      }
    }
  };

  return (
    <div className="music-player-widget" style={widgetStyles}>
      <button
        onClick={toggleMusic}
        className="music-toggle-btn"
        style={{
          ...btnStyles,
          background: isPlaying ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          boxShadow: isPlaying ? '0 0 15px rgba(239, 167, 181, 0.6)' : '0 4px 15px rgba(122, 40, 72, 0.1)'
        }}
        aria-label={isPlaying ? "Pause background music" : "Play romantic background music"}
        title={isPlaying ? "Click to pause music" : "Click to play romantic music"}
      >
        <span style={{ fontSize: '1.15rem' }}>
          {isPlaying ? '🎵' : '🔇'}
        </span>
        <span style={textStyles}>
          {isPlaying ? 'Music: Playing 🎶' : 'Music: Tap to Play 🎵'}
        </span>
        {isPlaying && (
          <span className="equalizer-bars" style={eqStyles}>
            <span style={bar1Style} />
            <span style={bar2Style} />
            <span style={bar3Style} />
          </span>
        )}
      </button>
    </div>
  );
}

// Inline styling for self-contained, crash-proof widget layout
const widgetStyles = {
  position: 'fixed',
  top: '16px',
  right: '16px',
  zIndex: 100,
};

const btnStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 14px',
  borderRadius: '9999px',
  border: '1px solid rgba(239, 167, 181, 0.5)',
  cursor: 'pointer',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  transition: 'all 0.3s ease',
  fontFamily: 'inherit',
  fontSize: '0.82rem',
  fontWeight: 600,
  color: '#7A2848',
};

const textStyles = {
  whiteSpace: 'nowrap',
};

const eqStyles = {
  display: 'inline-flex',
  alignItems: 'flex-end',
  gap: '2px',
  height: '12px',
  marginLeft: '2px',
};

const bar1Style = {
  width: '3px',
  height: '10px',
  background: '#EFA7B5',
  borderRadius: '2px',
  animation: 'flameFlicker 0.6s infinite alternate ease-in-out',
};

const bar2Style = {
  width: '3px',
  height: '14px',
  background: '#7A2848',
  borderRadius: '2px',
  animation: 'flameFlicker 0.8s infinite alternate-reverse ease-in-out',
};

const bar3Style = {
  width: '3px',
  height: '8px',
  background: '#EFA7B5',
  borderRadius: '2px',
  animation: 'flameFlicker 0.5s infinite alternate ease-in-out',
};
