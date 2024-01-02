import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from '../MoviesList/MoviesList.css';
import defaultImage from '../images/notfound.jpg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, name, title, poster_path }) => (
        <li key={id} className={css.item}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.link_movies}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImage
              }
              alt={title || name}
              width="300"
              height="400"
            />
            <span className={css.description}>{title || name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
