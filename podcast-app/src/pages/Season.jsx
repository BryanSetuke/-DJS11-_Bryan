import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EpisodeList from "../components/EpisodeList/EpisodeList";

const Season = () => {
    const { id } = useParams();
    const [season, setSeason] = useState(null);

    useEffect(() => {
        const fetchSeason = async () => {
            const response = await axios.get(
                `https://podcast-api.netlify.app/season/${id}`
            );
            setSeason(response.data);
        };
        fetchSeason();
    }, [id]);

    if (!season) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{season.title}</h1>
            <EpisodeList episodes={season.episodes} />
        </div>
    );
};

export default Season;
