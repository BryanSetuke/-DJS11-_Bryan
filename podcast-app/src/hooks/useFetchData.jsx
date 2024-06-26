import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading };
};

export default useFetchData;
