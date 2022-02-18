import PropTypes from 'prop-types';
import { useFetchTrendMovies } from 'hooks/useFetchTrendMovies';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { TrendList, TrendTitle } from './Home.styled';
export const Home = () => {
  const { trendMovies, handleLoadMore, loading, error } = useFetchTrendMovies();
  const location = useLocation();
  console.log(trendMovies);
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
Home.propTypes = {
  trendMovies: PropTypes.objectOf({
    id: PropTypes.number,
    original_title: PropTypes.string,
  }),
};

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
