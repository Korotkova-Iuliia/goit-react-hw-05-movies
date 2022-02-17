import { useFetchTrendMovies } from 'hooks/useFetchTrendMovies';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { TrendList, TrendTitle } from './Home.styled';
export const Home = () => {
  const { trendMovies, handleLoadMore, loading, error } = useFetchTrendMovies();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <TrendTitle>Trend movies</TrendTitle>
      {loading}
      {!error && (
        <TrendList>
          {trendMovies.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </NavLink>
            </li>
          ))}
        </TrendList>
      )}
      {trendMovies.length > 0 && (
        <Button type="button" loadMore={handleLoadMore} />
      )}
    </>
  );
};
