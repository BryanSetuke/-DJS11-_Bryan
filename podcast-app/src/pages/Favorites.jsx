import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import EpisodeItem from "../components/EpisodeItem/EpisodeItem";

const Favorites = () => {
    const { favorites } = useContext(AppContext);

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                favorites.map((episode) => (
                    <EpisodeItem key={episode.id} episode={episode} />
                ))
            )}
        </div>
    );
};

export default Favorites;
