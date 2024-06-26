import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SeasonList from "../SeasonList/SeasonList";

const ShowDetail = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShow = async () => {
            const response = await axios.get(
                `https://podcast-api.netlify.app/id/${id}`
            );
            setShow(response.data);
        };
        fetchShow();
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{show.title}</h1>
            <p>{show.description}</p>
            <SeasonList seasons={show.seasons} />
        </div>
    );
};

export default ShowDetail;
