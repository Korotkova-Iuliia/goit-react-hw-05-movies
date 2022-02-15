import { useFetchTrendMovies } from 'hooks/useFetchTrendMovies';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button/Button';
export const Home = () => {
  const { trendMovies, handleLoadMore, loading, error } = useFetchTrendMovies();
  return (
    <>
      <h1>Trend movies</h1>
      {loading}
      {!error && (
        <ul>
          {trendMovies.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`movies/${id}`}>{original_title}</NavLink>
            </li>
          ))}
        </ul>
      )}
      {trendMovies.length > 0 && (
        <Button type="button" loadMore={handleLoadMore} />
      )}
    </>
  );
};
