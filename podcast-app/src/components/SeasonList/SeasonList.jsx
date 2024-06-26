import PropTypes from 'prop-types';
import SeasonItem from "../SeasonItem/SeasonItem";

const SeasonList = ({ seasons }) => {
    return (
        <div>
            {seasons.map((season) => (
                <SeasonItem key={season.id} season={season} />
            ))}
        </div>
    );
};

SeasonList.propTypes = {
    seasons: PropTypes.array.isRequired
};

export default SeasonList;
