import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    return (
        <header>
            <h1>Podcast App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/settings">Settings</Link>
            </nav>
            <SearchBar />
        </header>
    );
};

export default Header;
