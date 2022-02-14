import { useEffect, useState } from 'react';
import { getMovieById, getMovieCast, getMovieReviews } from 'services';
import { NavLink, useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/MoviesApi';
import { Outlet, Link } from 'react-router-dom';
import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';

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
