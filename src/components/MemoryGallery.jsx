import React, { useState } from 'react';

export default function MemoryGallery({ config, onNext }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const memories = config?.memories || [];
  const galleryButtonText = config?.galleryButtonText || "Next Surprise →";

  const handleImageError = (id) => {
    // Graceful fallback: track error so we replace broken image with beautiful romantic illustration
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="stage-wrapper memory-gallery-screen">
      <div className="tag-badge">
        <span>📸</span>
        <span>Our Scrapbook</span>
      </div>

      <h2 className="heading-display">
        Our Little Memory Gallery 💖
      </h2>

      <p className="subheading">
        Every moment with you is my favorite memory. Tap any photo to take a closer look!
      </p>

      {/* Polaroid Scrapbook Grid */}
      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem 1.5rem',
          width: '100%',
          maxWidth: '920px',
          margin: '1.5rem auto 2.5rem auto',
          padding: '0 0.5rem',
        }}
      >
        {memories.map((item) => {
          const isMissing = failedImages[item.id];

          return (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedPhoto(item)}
              aria-label={`View memory: ${item.caption}`}
              className="gallery-item"
              style={{
                background: '#FFFFFF',
                borderRadius: '8px',
                padding: '12px 12px 20px 12px',
                boxShadow: '0 10px 25px rgba(122, 40, 72, 0.12)',
                border: '1px solid rgba(239, 167, 181, 0.3)',
                transform: `rotate(${item.rotation || 0}deg)`,
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04) rotate(0deg)';
                e.currentTarget.style.zIndex = '10';
                e.currentTarget.style.boxShadow = '0 18px 35px rgba(122, 40, 72, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${item.rotation || 0}deg)`;
                e.currentTarget.style.zIndex = '1';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(122, 40, 72, 0.12)';
              }}
            >
              {/* Scrapbook Washi Tape Effect */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70px',
                  height: '20px',
                  background: 'rgba(239, 167, 181, 0.65)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(2px)',
                  zIndex: 2,
                }}
              />

              {/* Photo Frame Container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  backgroundColor: '#FFF8F0',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {!isMissing ? (
                  <img
                    src={item.image}
                    alt={item.caption}
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                ) : (
                  // Graceful Romantic Placeholder (Never show a broken image!)
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #FFF8F0 0%, #F8DDE5 100%)',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <span style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>📷✨</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7A2848', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.tag || "Sweet Memory"}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#6e4352', marginTop: '2px' }}>
                      Add photo in assets/images/
                    </span>
                  </div>
                )}
              </div>

              {/* Polaroid Caption & Date */}
              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <p
                  className="heading-handwritten"
                  style={{
                    fontSize: '1.28rem',
                    color: 'var(--color-text-dark)',
                    lineHeight: '1.25',
                  }}
                >
                  {item.caption}
                </p>
                {item.date && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    {item.date}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Enlarged Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(58, 22, 36, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'stageFadeIn 0.3s ease-out forwards',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              padding: '1.5rem',
              boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(239, 167, 181, 0.3)',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                fontSize: '1.1rem',
                cursor: 'pointer',
                color: '#7A2848',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close photo view"
            >
              ✕
            </button>

            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                maxHeight: '360px',
                backgroundColor: '#FFF8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {!failedImages[selectedPhoto.id] ? (
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption}
                  style={{ width: '100%', maxHeight: '360px', objectFit: 'contain' }}
                />
              ) : (
                <div style={{ padding: '3rem 1rem', background: 'linear-gradient(135deg, #FFF8F0, #F8DDE5)' }}>
                  <span style={{ fontSize: '3rem' }}>📸💖</span>
                  <p style={{ marginTop: '0.5rem', fontWeight: 600, color: '#7A2848' }}>
                    {selectedPhoto.tag || "Our Favorite Memory"}
                  </p>
                </div>
              )}
            </div>

            <h3 className="heading-handwritten" style={{ fontSize: '1.75rem', marginTop: '1rem', color: '#7A2848' }}>
              {selectedPhoto.caption}
            </h3>
            {selectedPhoto.date && (
              <p style={{ fontSize: '0.85rem', color: '#6e4352', marginTop: '0.25rem' }}>
                {selectedPhoto.date}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Next Surprise Button */}
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <button
          onClick={onNext}
          className="btn-primary"
          aria-label="Continue to Reasons Why I Love You"
        >
          <span>{galleryButtonText}</span>
        </button>
      </div>
    </div>
  );
}
