import { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/MoviesApi';
export const useFetchTrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchTrendMovies() {
      setLoading(true);
      try {
        const result = await getTrendMovies(page);
        setTrendMovies(trendMovies => [...trendMovies, ...result]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendMovies();
  }, [page]);
  const handleLoadMore = () => {
    setPage(page => page + 1);
  };
  return { trendMovies, loading, error, handleLoadMore };
};
