import { useEffect, useState } from "react";
import axios from "axios";
import ShowItem from "../ShowItem/ShowItem";

const ShowList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            const response = await axios.get("https://podcast-api.netlify.app");
            setShows(response.data);
        };
        fetchShows();
    }, []);

    return (
        <div>
            {shows.map((show) => (
                <ShowItem key={show.id} show={show} />
            ))}
        </div>
    );
};

export default ShowList;
