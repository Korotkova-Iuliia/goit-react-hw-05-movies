import { useEffect, useState } from 'react';
import { getMovieCast } from 'services';
import { useParams } from 'react-router-dom';
import scrollBy from '../components/ScrollBy';
export const useFetchMovieCast = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log('useFetch CAST');
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
        scrollBy();
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return { movieById, loading, error };
};
