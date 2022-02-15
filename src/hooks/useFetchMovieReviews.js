import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services';
import { useParams } from 'react-router-dom';
import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';

export const useFetchMovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
      }
    }
    fetchMovieReviews();
  }, [movieId]);
  return { reviews, loading, error };
};
