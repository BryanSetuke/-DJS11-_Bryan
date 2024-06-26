import { useRef, useState } from "react";
import PropTypes from 'prop-types';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio ref={audioRef} src={src} />
            <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
};

AudioPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};

export default AudioPlayer;
