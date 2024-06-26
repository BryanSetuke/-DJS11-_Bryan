import { createContext, useState, useEffect } from "react";
import Notification from "../components/Notification/Notification";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const [notification, setNotification] = useState(null);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <AppContext.Provider
            value={{ favorites, setFavorites, showNotification }}
        >
            {children}
            {notification && (
                <Notification
                    message={notification}
                    onClose={() => setNotification(null)}
                />
            )}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppProvider;
