import { useEffect, useState } from 'react';
import { getMovieById } from 'services';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/MoviesApi';
import { Outlet, Link } from 'react-router-dom';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (trendMovies !== 0) return;
    async function fetchMovieById() {
      //   setLoading(true);
      try {
        const movieById = await getMovieById(movieId);
        console.log(movieById);
        console.log(movieById.original_title);
        console.log(movieById.overview);
        setMovieById(movieById);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        // setLoading(false);
      }
    }
    fetchMovieById();
    const { overview, original_title } = movieById;
    console.log(overview);
  }, [movieId]);
  console.log(movieId);
  console.log(movieById.overview);
  const { id, original_title } = movieById;
  const { overview } = movieById;
  console.log(overview);
  //   console.log(original_title);
  return (
    <>
      <div>kdfjhaslefahelhwelgkh</div>
      <div>{original_title}</div>
      {/* <ul>
        {movieById.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
};
