import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetchTrendMovies from '../hooks/useFetchTrendMovies';

const MoviesListTitle = () => {
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
export default MoviesListTitle;
