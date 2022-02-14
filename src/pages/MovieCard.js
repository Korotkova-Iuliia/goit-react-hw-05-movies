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
            <p>{movieById.original_title}</p>
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
export const Cast = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (trendMovies !== 0) return;
    async function fetchMovieCast() {
      setLoading(true);
      try {
        const movieById = await getMovieCast(movieId);
        setMovieById(movieById);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      <div>
        <ul>
          {movieById &&
            movieById.cast.map(name => (
              <li key={name.id}>
                {name.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${name.profile_path}`}
                    alt={name.original_name}
                  />
                )}
                <p>{name.original_name}</p>
              </li>
            ))}
        </ul>
        {/* {movieById.data.cast.map(name => (
          <span key={name.cast.cast_id}>{name.cast.original_name}</span>
        ))} */}
      </div>
    </>
  );
};
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (trendMovies !== 0) return;
    async function fetchMovieReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
        // console.log(reviews);
        // console.log(reviews.author_details);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
      }
    }
    fetchMovieReviews();
  }, [movieId]);
  return (
    <ul>
      {reviews &&
        reviews.map(review => (
          <li key={review.id}>
            <p> {review.author_details.username}</p>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};
