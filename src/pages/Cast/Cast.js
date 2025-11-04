import PropTypes from 'prop-types';
import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { CastList, CastItem } from './Cast.styled';
import inconito from '../../images/inconito.jpg';
const Cast = () => {
  const { movieById, error } = useFetchMovieCast();
  console.log(movieById);
  console.log(error);
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
export default Cast;

Cast.propTypes = {
  movieById: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        original_name: PropTypes.string.isRequired,
      })
    ),
  }),
};
