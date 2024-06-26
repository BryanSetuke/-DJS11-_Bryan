import PropTypes from 'prop-types';

const Timestamp = ({ currentTime, duration }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    // Add prop type validation
    Timestamp.propTypes = {
        currentTime: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    };

    return (
        <div>
            <span>{formatTime(currentTime)}</span> /{" "}
            <span>{formatTime(duration)}</span>
        </div>
    );
};

export default Timestamp;
