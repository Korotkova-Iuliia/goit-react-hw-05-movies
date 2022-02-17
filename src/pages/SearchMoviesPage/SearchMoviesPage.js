import { Link, useLocation } from 'react-router-dom';
import { SearchMovies } from '../../components/SearchMovies';
import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import Button from '../../components/Button/Button';
import { TrendList } from '../Home/Home.styled';
export const SearchMoviesPage = () => {
  const location = useLocation();
  console.log(location);
  const { listMovies, error, handleSearchMovies, handleLoadMore } =
    useFetchSearchMovies();
  return (
    <>
      <SearchMovies onSearch={handleSearchMovies} />
      {!error && listMovies.length > 0 && (
        <TrendList>
          {listMovies.map(({ id, original_title }) => (
            <li key={id}>
              {/* <Link to={`${id}`}> */}
              <Link to={`${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </TrendList>
      )}
      {listMovies.length > 0 && (
        <Button type="button" loadMore={handleLoadMore} />
      )}
    </>
  );
};
