import { useEffect, useState } from "react";
import { fetchShows } from "../api";
import ShowPreview from "../components/ShowPreview/ShowPreview";
import Loading from "../components/Loading/Loading";
import "./Home.css";

const Home = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getShows = async () => {
            try {
                const data = await fetchShows();
                setShows(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching shows:", error);
                setLoading(false);
            }
        };

        getShows();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="home">
            {shows.length > 0 ? (
                <div className="show-list">
                    {shows.map((show) => (
                        <ShowPreview key={show.id} show={show} />
                    ))}
                </div>
            ) : (
                <p>No shows available.</p>
            )}
        </div>
    );
};

export default Home;
