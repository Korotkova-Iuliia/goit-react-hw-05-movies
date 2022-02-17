import { useEffect, useState } from 'react';
import { getMovieById } from 'services';
import { useParams } from 'react-router-dom';
export const useFetchMovieById = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log('useFetch MOVIE BY ID');
    async function fetchMovieById() {
      setLoading(true);
      try {
        const movieById = await getMovieById(movieId);
        setMovieById(movieById);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);
  return { movieById, loading, error };
};
