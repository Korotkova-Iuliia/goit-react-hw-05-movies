import { useEffect, useState } from 'react';
import { getMovieById, getMovieCast, getMovieReviews } from 'services';
import { NavLink, useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'services/MoviesApi';
import { Outlet, Link } from 'react-router-dom';
import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';
export const Cast = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // if (!movieById) return;
    async function fetchMovieCast() {
      setLoading(true);
      try {
        const movieById = await getMovieCast(movieId);
        setMovieById(movieById);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      <ul>
        {movieById &&
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
// import { useEffect, useState } from 'react';
// import { getMovieById, getMovieCast, getMovieReviews } from 'services';
// import { NavLink, useParams } from 'react-router-dom';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { getTrendMovies } from 'services/MoviesApi';
// import { useFetchMovieCast } from 'hooks';
// import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';
// export const Cast = () => {
//   const { movieById } = useFetchMovieCast;
//   return (
//     <>
//       <div>
//         <ul>
//           {movieById &&
//             movieById.cast.map(name => (
//               <li key={name.id}>
//                 {name.profile_path && (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w200${name.profile_path}`}
//                     alt={name.original_name}
//                   />
//                 )}
//                 <p>{name.original_name}</p>
//               </li>
//             ))}
//         </ul>
//         {/* {movieById.data.cast.map(name => (
//           <span key={name.cast.cast_id}>{name.cast.original_name}</span>
//         ))} */}
//       </div>
//     </>
//   );
// };
