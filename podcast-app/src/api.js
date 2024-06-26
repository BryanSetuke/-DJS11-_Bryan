export const fetchShows = async () => {
    const response = await fetch("https://podcast-api.netlify.app");
    if (!response.ok) {
        throw new Error("Failed to fetch shows");
    }
    return response.json();
};
