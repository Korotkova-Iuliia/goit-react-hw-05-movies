import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services';
import { useParams } from 'react-router-dom';
import scrollBy from '../components/ScrollBy';
export const useFetchMovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log('useFetch REVIEW');
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
        scrollBy();
      }
    }
    fetchMovieReviews();
  }, [movieId]);
  return { reviews, loading, error };
};
