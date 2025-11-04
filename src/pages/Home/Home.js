import { useFetchTrendMovies } from 'hooks/useFetchTrendMovies';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import noPoster from '../../images/noPoster.jpg';
import {
  TrendList,
  TrendTitle,
  TrendItem,
  MoviePoster,
  StyledLink,
  Loader,
  ErrorMsg,
} from './Home.styled';

export const Home = () => {
  const { trendMovies, handleLoadMore, loading, error } = useFetchTrendMovies();
  const location = useLocation();

  return (
    <>
      <TrendTitle>Trend movies</TrendTitle>

      {loading && <Loader>Loading...</Loader>}
      {error && <ErrorMsg>Failed to load movies.</ErrorMsg>}

      {!error && (
        <TrendList>
          {trendMovies.map(({ id, original_title, poster_path }) => (
            <TrendItem key={id}>
              <StyledLink to={`movies/${id}`} state={{ from: location }}>
                <MoviePoster
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : noPoster
                  }
                  alt={original_title}
                />
                {original_title}
              </StyledLink>
            </TrendItem>
          ))}
        </TrendList>
      )}

      {trendMovies.length > 0 && (
        <Button type="button" loadMore={handleLoadMore} />
      )}
    </>
  );
};

// trendMovies - ous hook
// Home.propTypes = {
//   trendMovies: PropTypes.objectOf({
//     id: PropTypes.number,
//     original_title: PropTypes.string,
//   }),
// };

// // SearchMoviesPage.propTypes = {
// //   listMovies: PropTypes.objectOf({
// //     id: PropTypes.number,
// //     poster_path: PropTypes.string,
// //     original_title: PropTypes.string,
// //     overview: PropTypes.string,
// //     vote_average: PropTypes.string,
// //     genres: PropTypes.shape({
// //       id: PropTypes.number,
// //       name: PropTypes.string,
// //     }),
// //   }),
// // };
// // MovieCard.propTypes = {
// //   movieById: PropTypes.arrayOf({
// //     id: PropTypes.number,
// //     poster_path: PropTypes.string,
// //     original_title: PropTypes.string,
// //     overview: PropTypes.string,
// //     vote_average: PropTypes.string,
// //   }),
// // };
// // Cast.propTypes = {
// //   movieById: PropTypes.arrayOf({
// //     cast: PropTypes.arrayOf({
// //       id: PropTypes.number,
// //       profile_path: PropTypes.string,
// //       original_name: PropTypes.string,
// //     }),
// //   }),
// // };
