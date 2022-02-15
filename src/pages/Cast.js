import { useFetchMovieCast } from 'hooks/useFetchMovieCast';

export const Cast = () => {
  const { movieById, error } = useFetchMovieCast();
  return (
    <>
      <ul>
        {!error &&
          movieById &&
          movieById.cast.map(name => (
            <li key={name.id}>
              {name.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${name.profile_path}`}
                  alt={name.original_name}
                />
              )}
              <p>{name.original_name}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
