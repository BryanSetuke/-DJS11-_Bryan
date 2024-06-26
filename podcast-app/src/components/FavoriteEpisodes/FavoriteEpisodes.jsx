import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import EpisodeItem from "../EpisodeItem/EpisodeItem";

const FavoriteEpisodes = () => {
    const { favorites } = useContext(AppContext);

    return (
        <div>
            <h1>Favorite Episodes</h1>
            {favorites.length === 0 ? (
                <p>No favorite episodes yet.</p>
            ) : (
                favorites.map((episode) => (
                    <EpisodeItem key={episode.id} episode={episode} />
                ))
            )}
        </div>
    );
};

export default FavoriteEpisodes;
