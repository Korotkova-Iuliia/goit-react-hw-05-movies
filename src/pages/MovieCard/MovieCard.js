import PropTypes from 'prop-types';
import { useFetchMovieById } from 'hooks';
import { LayoutFeatureMovie } from '../../components/layout/Layout';
import { Card, Description, VoteAverage } from './MovieCard.styled';
import { Link, useLocation } from 'react-router-dom';
import { BsFillCaretLeftFill, BsFillStarFill } from 'react-icons/bs';
import noPoster from '../../images/noPoster.jpg';
export const MovieCard = () => {
  const location = useLocation();
  const { movieById, error } = useFetchMovieById();
  console.log(movieById);
  return (
    <>
      <Link to={location?.state?.from ?? '/'}>
        <BsFillCaretLeftFill />
        Go Back
      </Link>
      {!error && movieById && (
        <Card>
          <img
            src={
              movieById.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieById.poster_path}`
                : noPoster
            }
            alt={movieById.original_title}
          />
          <Description>
            <h1>{movieById.original_title}</h1>
            <VoteAverage>
              <span>
                <BsFillStarFill />
              </span>
              {movieById.vote_average}
            </VoteAverage>
            <h2>Overview</h2>
            <p>{movieById.overview}</p>
            <h2>Genres</h2>
            <p>
              {movieById.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </p>
          </Description>
        </Card>
      )}
      <div>
        <LayoutFeatureMovie />
      </div>
    </>
  );
};
MovieCard.propTypes = {
  movieById: PropTypes.objectOf({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
};
