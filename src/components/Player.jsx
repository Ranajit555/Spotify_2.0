import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ currentSong }) => {
    return (
        <div className="bg-gradient-to-br from-black to-[rgb(35,35,44)] text-white  fixed bottom-0 flex justify-between items-center w-[100%] h-[13vh]">
            <AudioPlayer
                src={currentSong && currentSong.link}
                className=' bg-gradient-to-br from-black to-[#565675] text-white'
                onPlay={() => console.log("Playing")}
                showSkipControls={true}
                showJumpControls={true}
                showDownloadProgress={true}
                customAdditionalControls={[]}
                header={currentSong &&`Now Playing: ${currentSong.name}`}
                footer={currentSong &&`By: ${currentSong.artists.join(', ')}`}
            />
        </div>
    );
};

export default Player;