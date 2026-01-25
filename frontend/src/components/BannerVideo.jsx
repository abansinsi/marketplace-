import React, { useState } from 'react';
import './BannerVideo. css';

const BannerVideo = ({ videoUrl, title }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const getYoutubeEmbedUrl = (url) => {
    let videoId;
    if (url.includes('youtube.com')) {
      videoId = url.split('v=')[1];
    } else if (url. includes('youtu.be')) {
      videoId = url.split('/').pop();
    }
    return `https://www.youtube.com/embed/${videoId}? autoplay=1`;
  };

  if (! videoUrl) {
    return null;
  }

  return (
    <>
      <div className="banner-video-container">
        <img
          src={`https://img.youtube.com/vi/${videoUrl. split('v=')[1] || videoUrl.split('/').pop()}/maxresdefault.jpg`}
          alt={title}
          className="banner-thumbnail"
          onClick={() => setShowOverlay(true)}
        />
        <div className="play-button" onClick={() => setShowOverlay(true)}>
          <span className="play-icon">▶</span>
        </div>
      </div>

      {showOverlay && (
        <div className="video-overlay" onClick={() => setShowOverlay(false)}>
          <div className="video-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowOverlay(false)}>✕</button>
            <iframe
              width="100%"
              height="600"
              src={getYoutubeEmbedUrl(videoUrl)}
              title={title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerVideo;
