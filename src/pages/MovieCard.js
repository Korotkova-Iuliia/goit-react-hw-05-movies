import { useEffect, useState } from 'react';
import { getMovieById, getMovieCast, getMovieReviews } from 'services';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/MoviesApi';
import { Outlet, Link } from 'react-router-dom';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (trendMovies !== 0) return;
    async function fetchMovieById() {
      //   setLoading(true);
      try {
        const movieById = await getMovieById(movieId);
        setMovieById(movieById);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        // setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <>
      {movieById && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieById.poster_path}`}
            alt={movieById.original_title}
          />
          <div>
            <h1>{movieById.original_title}</h1>
            <p>{movieById.original_title}</p>
            <h2>Overview</h2>
            <p>{movieById.overview}</p>
            <h2>Genres</h2>
            <p>
              {movieById.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </p>
            <h2>Cast</h2>
            <Cast />
            <h2>Reviews</h2>
            {/* <Reviews /> */}
          </div>
        </>
      )}
    </>
  );
};
export const Cast = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (trendMovies !== 0) return;
    async function fetchMovieCast() {
      //   setLoading(true);
      try {
        const movieById = await getMovieCast(movieId);
        setMovieById(movieById);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        // setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      <div>
        <ul>
          {movieById &&
            movieById.cast.map(name => (
              <li key={name.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${name.profile_path}`}
                  alt={name.original_name}
                />
                <p>{name.original_name}</p>
              </li>
            ))}
        </ul>
        {/* {movieById.data.cast.map(name => (
          <span key={name.cast.cast_id}>{name.cast.original_name}</span>
        ))} */}
      </div>
    </>
  );
};
// export const Reviews = () => {
//   const { movieId } = useParams();
//   const [movieById, setMovieById] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     // if (trendMovies !== 0) return;
//     async function fetchMovieReviews() {
//       try {
//         const movieById = await getMovieReviews(movieId);
//         setMovieById(movieById);
//       } catch (error) {
//         console.log(error);
//         setError(error);
//       } finally {
//       }
//     }
//     fetchMovieReviews();
//   }, [movieId]);
//   return (
//     <>
//       <div>
//         {/* {movieById.data.cast.map(name => (
//           <span key={name.cast.cast_id}>{name.cast.original_name}</span>
//         ))} */}
//       </div>
//     </>
//   );
// };
// {
//   movieById && (
//     <>
//       <div>Card</div>
//       {/* <p>
//             {movieById.data.cast.map(name => (
//               <span key={name.cast.cast_id}>{name.cast.original_name}</span>
//             ))}
//           </p> */}
//       {/* <img
//             src={`https://image.tmdb.org/t/p/w500${movieById.poster_path}`}
//             alt={movieById.original_title}
//           /> */}
//     </>
//   );
// }
