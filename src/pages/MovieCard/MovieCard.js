import { useFetchMovieById } from 'hooks';
import { LayoutFeatureMovie } from '../../components/layout/Layout';
import { Card, Description } from './MovieCard.styled';
import { Link, useLocation } from 'react-router-dom';
import { BsFillCaretLeftFill } from 'react-icons/bs';
export const MovieCard = () => {
  const location = useLocation();
  console.log(location);
  const { movieById, error } = useFetchMovieById();
  // location?.state?.from ?? '/';
  return (
    <>
      <Link to={location?.state?.from ?? '/'}>Go Back</Link>
      {/* <Link to="/">
        <BsFillCaretLeftFill />
        To List
      </Link> */}
      {!error && movieById && (
        <Card>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieById.poster_path}`}
            alt={movieById.original_title}
          />
          <Description>
            <h1>{movieById.original_title}</h1>
            <p>{movieById.vote_average}</p>
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
