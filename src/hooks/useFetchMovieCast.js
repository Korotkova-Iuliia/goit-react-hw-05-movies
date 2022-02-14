// import { useEffect, useState } from 'react';
// import { getMovieById, getMovieCast, getMovieReviews } from 'services';
// import { NavLink, useParams } from 'react-router-dom';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { getTrendMovies } from 'services/MoviesApi';
// import { Outlet, Link } from 'react-router-dom';
// import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';
// export const useFetchMovieCast = () => {
//   const { movieId } = useParams();
//   const [movieById, setMovieById] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     // if (!movieById) return;
//     async function fetchMovieCast() {
//       setLoading(true);
//       try {
//         const movieById = await getMovieCast(movieId);
//         setMovieById(movieById);
//       } catch (error) {
//         console.log(error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchMovieCast();
//   }, [movieId]);
//   return { movieById, loading, error };
// };
