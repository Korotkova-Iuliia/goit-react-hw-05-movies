import { useEffect, useState } from 'react';
import axios from 'axios';
// import { getTrendMovies } from '../services/MoviesApi';

const getTrendMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=e815f38922cafca80c1f07403a692f09'
  );
  console.log(response.data);
  return response.data;
};
// getTrendMovies().then(data => console.log(data.results[0].title));
// getTrendMovies().then(data => console.log(data.results.title));
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
      } catch (error) {
        setError(error);
      } finally {
        console.log(error);
        setLoading(false);
      }
    }
    fetchTrendMovies();
  }, [error, trendMovies]);
  console.log(trendMovies);
  return { trendMovies, loading, error };
};
export const App = () => {
  return (
    <>
      <div>render</div>
      <div>hello</div>
    </>
  );
};
