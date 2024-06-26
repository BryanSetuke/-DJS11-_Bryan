import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

const Settings = () => {
    const { setFavorites } = useContext(AppContext);
    const [clearConfirmation, setClearConfirmation] = useState(false);

    const clearFavorites = () => {
        setFavorites([]);
        setClearConfirmation(false);
    };

    return (
        <div>
            <h1>Settings</h1>
            <button onClick={() => setClearConfirmation(true)}>
                Clear Favorites
            </button>
            {clearConfirmation && (
                <div>
                    <p>Are you sure you want to clear all favorites?</p>
                    <button onClick={clearFavorites}>Yes</button>
                    <button onClick={() => setClearConfirmation(false)}>
                        No
                    </button>
                </div>
            )}
        </div>
    );
};

export default Settings;
