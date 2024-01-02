import { fetchMovieByCast } from '../../APIService/APIservice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../images/notfound.jpg';
import './Cast.css';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieByCast(moviesId);
        setCast(cast);
      } catch ({ message }) {
        console.log(message);
      }
    };

    fetchCast();
  }, [moviesId]);

  if (!cast.length) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul id='cUl'>
      {cast.map(({ character, profile_path, name, id }) => (
        <li key={id} id='cLi'>
          <img
            src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImage}
            alt={`Depiction of ${name}`}
            width="140"
            height="175"
          />
          <div>
            <h3>{name}</h3>
            <h4>Character: </h4>
            <p>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
