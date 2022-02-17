import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services';
import { useParams } from 'react-router-dom';
export const useFetchMovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchMovieReviews() {
      setLoading(true);
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);
  return { reviews, loading, error };
};
