import { useEffect, useState } from 'react';
import { getMovieCast } from 'services';
import { useParams } from 'react-router-dom';
export const useFetchMovieCast = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
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
  return { movieById, loading, error };
};
