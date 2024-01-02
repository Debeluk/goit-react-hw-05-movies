import { useState, useEffect } from 'react';
import { moviesFetch } from '../APIService/APIservice';
import { MoviesList } from '../MoviesList/MoviesList';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await moviesFetch();
        setTrendingFilms(response);
      } catch ({ message }) {
        console.log(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!trendingFilms.length) {
    return <p>No movies found.</p>;
  }

  return (
    <div>
      <MoviesList movies={trendingFilms} />
    </div>
  );
};

export default Home;
