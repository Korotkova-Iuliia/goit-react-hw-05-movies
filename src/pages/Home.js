import { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/MoviesApi';
import { Outlet, Link } from 'react-router-dom';
export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (trendMovies !== 0) return;
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
  return (
    <>
      <h1>Trend movies</h1>
      {loading}
      {!error && (
        <ul>
          {trendMovies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// return { trendMovies, loading, error };

//   // return (
//   //   <>
//   //     {loading}
//   //     {!error && (
//   //       <ul>
//   //         {trendMovies.map(({ id, original_title }) => (
//   //
//   // <Link key={id} to={`/${id}`}>
//   //   <li>{original_title}</li>
//   // </Link>;
//   //         ))}
//   //       </ul>
//   //     )}
//   //   </>
//   // );
// };
