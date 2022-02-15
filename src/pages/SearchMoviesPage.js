import { Link } from 'react-router-dom';
import { SearchMovies } from '../components/SearchMovies';
import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import Button from '../components/Button/Button';
export const SearchMoviesPage = () => {
  const { listMovies, loading, error, handleSearchMovies, handleLoadMore } =
    useFetchSearchMovies();
  return (
    <>
      {loading}
      <SearchMovies onSearch={handleSearchMovies} />
      {!error && listMovies.length > 0 && (
        <ul>
          {listMovies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      )}
      {listMovies.length > 0 && (
        <Button type="button" loadMore={handleLoadMore} />
      )}
    </>
  );
};

// {
//   /* <ToastContainer position="top-center" autoClose={2000} /> */
// }
