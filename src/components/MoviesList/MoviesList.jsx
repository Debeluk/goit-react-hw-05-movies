import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../MoviesList/MoviesList.css';
import defaultImage from '../images/notfound.jpg';
import './MoviesList.css'

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, name, title, poster_path }) => (
        <li key={id}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
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
            <span>{title || name}</span>
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
