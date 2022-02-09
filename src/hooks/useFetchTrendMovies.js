import { useEffect, useState } from 'react';
import { getTrendMovies } from '../services/MoviesApi';

const useFetchTrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchTrendMovies() {
      setLoading(true);
      try {
        const trendMovies = await getTrendMovies();
        setTrendMovies(trendMovies);
        console.log(trendMovies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendMovies();
  }, []);
  return { trendMovies, loading, error };
};
export default useFetchTrendMovies;
// getTrendMovies().then(data => console.log(data.results));
