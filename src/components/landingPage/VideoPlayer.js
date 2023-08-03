// import React from 'react';

// function VideoPlayer() {
//     return (
//         <div>
//             <iframe 
//                 width="560" height="315" 
//                 src="https://www.youtube.com/embed/kx4aKYlviYs?autoplay=1&loop=1&mute=1" 
//                 title="YouTube video player" 
//                 frameborder="0" 
//                 allow="accelerometer; 
//                 autoplay; 
//                 clipboard-write; 
//                 encrypted-media; 
//                 gyroscope; 
//                 picture-in-picture; 
//                 web-share" 
//                 allowfullscreen>

//         </iframe>

//         </div>
        
//     );
// }

// export default VideoPlayer;

import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer() {
    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: 'kx4aKYlviYs', // Replace with your YouTube video ID
        },
    };

    return <YouTube videoId="kx4aKYlviYs" opts={opts} />;
}

export default VideoPlayer;
