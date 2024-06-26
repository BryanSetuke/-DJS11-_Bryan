import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SeasonItem = ({ season }) => {
    return (
        <div>
            <img src={season.image} alt={season.title} />
            <h2>{season.title}</h2>
            <p>Episodes: {season.episodes.length}</p>
            <Link to={`/season/${season.id}`}>View Season</Link>
        </div>
    );
};

SeasonItem.propTypes = {
    season: PropTypes.object.isRequired
};

export default SeasonItem;
