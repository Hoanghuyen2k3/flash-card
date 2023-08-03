
import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer() {
    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: 'kx4aKYlviYs', 
        },
    };

    return <YouTube videoId="kx4aKYlviYs" opts={opts} />;
}

export default VideoPlayer;
