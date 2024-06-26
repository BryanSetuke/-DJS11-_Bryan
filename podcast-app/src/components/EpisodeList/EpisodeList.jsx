import PropTypes from 'prop-types';
import EpisodeItem from "../EpisodeItem/EpisodeItem";

const EpisodeList = ({ episodes }) => {
    return (
        <div>
            {episodes.map((episode) => (
                <EpisodeItem key={episode.id} episode={episode} />
            ))}
        </div>
    );
};

EpisodeList.propTypes = {
    episodes: PropTypes.array.isRequired
};

export default EpisodeList;
