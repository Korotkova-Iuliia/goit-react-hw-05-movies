import { Link, useLocation } from 'react-router-dom';
import { SearchMovies } from '../../components/SearchMovies/SearchMovies';
import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import Button from '../../components/Button/Button';
import {
  SearchList,
  SearchItem,
  MoviePoster,
  MovieTitle,
} from './SearchMoviesPage.styled';
import noPoster from '../../images/noPoster.jpg';

const SearchMoviesPage = () => {
  const location = useLocation();
  const {
    listMovies = [],
    error,
    handleSearchMovies,
    handleLoadMore,
  } = useFetchSearchMovies();

  return (
    <>
      <SearchMovies onSearch={handleSearchMovies} />
      {!error && listMovies.length > 0 && (
        <SearchList>
          {listMovies.map(({ id, original_title, poster_path }) => (
            <SearchItem key={id}>
              <Link
                to={`${id}`}
                state={{
                  from: {
                    pathname: location.pathname,
                    search: location.search,
                    scrollY: window.scrollY,
                  },
                }}
              >
                <MoviePoster
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : noPoster
                  }
                  alt={original_title}
                />
                <MovieTitle>{original_title}</MovieTitle>
              </Link>
            </SearchItem>
          ))}
        </SearchList>
      )}
      {listMovies.length > 0 && (
        <Button type="button" loadMore={handleLoadMore} />
      )}
    </>
  );
};

export default SearchMoviesPage;

// import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { SearchMovies } from '../../components/SearchMovies/SearchMovies';
// import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
// import Button from '../../components/Button/Button';
// import { TrendList } from '../Home/Home.styled';
// const SearchMoviesPage = () => {
//   const location = useLocation();
//   const { listMovies, error, handleSearchMovies, handleLoadMore } =
//     useFetchSearchMovies();
//   console.log(listMovies);
//   return (
//     <>
//       <SearchMovies onSearch={handleSearchMovies} />
//       {!error && listMovies.length > 0 && (
//         <TrendList>
//           {listMovies.map(({ id, original_title }) => (
//             <li key={id}>
//               <Link to={`${id}`} state={{ from: location }}>
//                 {original_title}
//               </Link>
//             </li>
//           ))}
//         </TrendList>
//       )}
//       {listMovies.length > 0 && (
//         <Button type="button" loadMore={handleLoadMore} />
//       )}
//     </>
//   );
// };
// export default SearchMoviesPage;

// SearchMoviesPage.propTypes = {
//   listMovies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       original_title: PropTypes.string.isRequired,
//     })
//   ),
// };
