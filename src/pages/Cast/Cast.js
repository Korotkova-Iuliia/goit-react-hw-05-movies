import PropTypes from 'prop-types';
import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { CastList, CastItem } from './Cast.styled';
import inconito from '../../images/inconito.jpg';
export const Cast = () => {
  const { movieById, error } = useFetchMovieCast();
  return (
    <CastList>
      {!error &&
        movieById &&
        movieById.cast.map(({ id, profile_path, original_name }) => (
          <CastItem key={id}>
            {
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : inconito
                }
                alt={original_name}
              />
            }
            <p>{original_name}</p>
          </CastItem>
        ))}
    </CastList>
  );
};
Cast.propTypes = {
  movieById: PropTypes.arrayOf({
    cast: PropTypes.arrayOf({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      original_name: PropTypes.string,
    }),
  }),
};
