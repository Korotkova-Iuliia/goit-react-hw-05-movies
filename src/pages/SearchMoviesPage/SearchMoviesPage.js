import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SearchMovies } from '../../components/SearchMovies';
import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import Button from '../../components/Button/Button';
import { TrendList } from '../Home/Home.styled';
export const SearchMoviesPage = () => {
  const location = useLocation();
  // console.log(location);
  const { listMovies, error, handleSearchMovies, handleLoadMore } =
    useFetchSearchMovies();
  console.log(listMovies);
  return (
    <>
      <SearchMovies onSearch={handleSearchMovies} />
      {!error && listMovies.length > 0 && (
        <TrendList>
          {listMovies.map(({ id, original_title }) => (
            <li key={id}>
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
// SearchMoviesPage.propTypes = {
//   listMovies: PropTypes.object({
//     id: PropTypes.number,
//     original_title: PropTypes.number,
//   }),
// };

// SearchMoviesPage.propTypes = {
//   listMovies: PropTypes.objectOf({
//     id: PropTypes.number,
//     poster_path: PropTypes.string,
//     original_title: PropTypes.string,
//     overview: PropTypes.string,
//     vote_average: PropTypes.string,
//     genres: PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//     }),
//   }),
// };
// MovieCard.propTypes = {
//   movieById: PropTypes.arrayOf({
//     id: PropTypes.number,
//     poster_path: PropTypes.string,
//     original_title: PropTypes.string,
//     overview: PropTypes.string,
//     vote_average: PropTypes.string,
//   }),
// };
// Cast.propTypes = {
//   movieById: PropTypes.arrayOf({
//     cast: PropTypes.arrayOf({
//       id: PropTypes.number,
//       profile_path: PropTypes.string,
//       original_name: PropTypes.string,
//     }),
//   }),
// };
