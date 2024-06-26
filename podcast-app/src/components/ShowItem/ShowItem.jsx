import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ShowItem = ({ show }) => {
    return (
        <div>
            <img src={show.image} alt={show.title} />
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <p>Seasons: {show.seasons}</p>
            <Link to={`/show/${show.id}`}>View Show</Link>
        </div>
    );
};

ShowItem.propTypes = {
    show: PropTypes.object.isRequired
};

export default ShowItem;
