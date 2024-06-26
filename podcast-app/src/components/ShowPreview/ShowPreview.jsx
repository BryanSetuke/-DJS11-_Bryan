import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./ShowPreview.css";

const ShowPreview = ({ show }) => {
    return (
        <div className="show-preview">
            <img src={show.image} alt={`${show.title} cover`} />
            <h3>{show.title}</h3>
            <p>{show.description}</p>
            <p>Seasons: {show.seasons.length}</p>
            <p>Last updated: {new Date(show.updated).toLocaleDateString()}</p>
            <div className="genres">
                {show.genreIds.map((genreId) => (
                    <span key={genreId} className="genre">
                        {getGenreTitle(genreId)}
                    </span>
                ))}
            </div>
            <Link to={`/show/${show.id}`}>View Show</Link>
        </div>
    );
};

ShowPreview.propTypes = {
    show: PropTypes.object.isRequired,
};

// Helper function to get genre title by ID
const getGenreTitle = (id) => {
    const genres = {
        1: "Personal Growth",
        2: "Investigative Journalism",
        3: "History",
        4: "Comedy",
        5: "Entertainment",
        6: "Business",
        7: "Fiction",
        8: "News",
        9: "Kids and Family",
    };
    return genres[id] || "Unknown Genre";
};

export default ShowPreview;
