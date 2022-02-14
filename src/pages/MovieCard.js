import { useEffect, useState } from 'react';
import { getMovieById, getMovieCast, getMovieReviews } from 'services';
import { NavLink, useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/MoviesApi';
import { Outlet, Link } from 'react-router-dom';
import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';

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
        setMovieById(movieById);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        // setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <>
      {movieById && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieById.poster_path}`}
            alt={movieById.original_title}
          />
          <div>
            <h1>{movieById.original_title}</h1>
            <p>{movieById.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieById.overview}</p>
            <h2>Genres</h2>
            <p>
              {movieById.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </p>
          </div>
          <div>
            <LayoutFeatureMovie />
          </div>
        </>
      )}
    </>
  );
};
