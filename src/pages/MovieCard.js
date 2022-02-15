import { useFetchMovieById } from 'hooks';
import { LayoutFeatureMovie } from '../components/layout/Layout';

export const MovieCard = () => {
  const { movieById, error } = useFetchMovieById();
  return (
    <>
      {!error && movieById && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieById.poster_path}`}
            alt={movieById.original_title}
          />
          <div>
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
          </div>
          <div>
            <LayoutFeatureMovie />
          </div>
        </>
      )}
    </>
  );
};
