import { MoviesList } from '../MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from '../APIService/APIservice';
import css from './Movies.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await fetchMoviesByName(query);
        setMovies(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  return (
    <div className={css.moviesForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query here, please"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
        <button type="submit">
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Movies;
