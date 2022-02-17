import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { CastList, CastItem, BackgroundImg } from './Cast.styled';
import inconito from '../../images/inconito.jpg';
export const Cast = () => {
  const { movieById, error } = useFetchMovieCast();
  return (
    <CastList>
      {!error &&
        movieById &&
        movieById.cast.map(name => (
          <CastItem key={name.id}>
            {
              <img
                src={
                  name.profile_path
                    ? `https://image.tmdb.org/t/p/w200${name.profile_path}`
                    : inconito
                }
                alt={name.original_name}
              />
            }
            <p>{name.original_name}</p>
          </CastItem>
        ))}
    </CastList>
  );
};
