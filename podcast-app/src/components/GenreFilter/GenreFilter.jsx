import PropTypes from 'prop-types';

const GenreFilter = ({ genres, selectedGenre, onGenreSelect }) => {
    return (
        <div>
            <select
                value={selectedGenre}
                onChange={(e) => onGenreSelect(e.target.value)}
            >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
};

GenreFilter.propTypes = {
    genres: PropTypes.array.isRequired,
    selectedGenre: PropTypes.string,
    onGenreSelect: PropTypes.func.isRequired
};

export default GenreFilter;
