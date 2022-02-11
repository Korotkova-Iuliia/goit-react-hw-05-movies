import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/MoviesApi';

export const useFetchSearchMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (trendMovies !== 0) return;
    async function fetchSearchMovies() {
      setLoading(true);
      try {
        const trendMovies = await getSearchMovies();
        setTrendMovies(trendMovies);
        console.log(trendMovies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSearchMovies();
  }, []);

  return { trendMovies, loading, error };
};
