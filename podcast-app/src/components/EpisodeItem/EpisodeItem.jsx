import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import PropTypes from 'prop-types';

const EpisodeItem = ({ episode }) => {
    const { favorites, setFavorites, showNotification } =
        useContext(AppContext);

    const isFavorite = favorites.some((fav) => fav.id === episode.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav.id !== episode.id));
            showNotification("Removed from favorites");
        } else {
            setFavorites([...favorites, episode]);
            showNotification("Added to favorites");
        }
    };

    return (
        <div>
            <h3>{episode.title}</h3>
            <AudioPlayer src={episode.file} />
            <button onClick={toggleFavorite}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
};

EpisodeItem.propTypes = {
    episode: PropTypes.object.isRequired
};

export default EpisodeItem;
