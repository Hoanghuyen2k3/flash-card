import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0,
      showinfo: 0,
      loop: 1,
      playlist: videoId,
      mute: 1, // Set mute to 1 for autoplay with no sound
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
