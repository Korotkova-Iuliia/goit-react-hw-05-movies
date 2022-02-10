import { useParams, useNavigate, Link } from 'react-router-dom';
// import useFetchTrendMovies from '../hooks/useFetchTrendMovies';
import { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/MoviesApi';

const useFetchTrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (trendMovies !== 0) return;
    async function fetchTrendMovies() {
      setError(error);
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
  }, [error, trendMovies]);
  console.log(trendMovies);
  return { trendMovies, loading, error };
};

export default useFetchTrendMovies;

export const MoviesListTitle = () => {
  const { trendMovies, loading, error } = useFetchTrendMovies;
  console.log(trendMovies);

  return (
    <main>
      <h1>Trend movies</h1>
      {loading}
      {!error && (
        <ul>
          {trendMovies.map(({ id, original_title }) => (
            <Link key={id} to={`/${id}`}>
              <li>{original_title}</li>
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
};
