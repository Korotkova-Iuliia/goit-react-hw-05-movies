import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { CastList, CastItem, BackgroundImg } from './Cast.styled';
export const Cast = () => {
  const { movieById, error } = useFetchMovieCast();
  return (
    <CastList>
      {!error &&
        movieById &&
        movieById.cast.map(name => (
          <CastItem key={name.id}>
            {name.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${name.profile_path}`}
                alt={name.original_name}
              />
            ) : (
              <BackgroundImg />
            )}
            <p>{name.original_name}</p>
          </CastItem>
        ))}
    </CastList>
  );
};
