// import { useEffect, useState } from 'react';
// import { getMovieById } from 'services/MoviesApi';
// import { useParams } from 'react-router-dom';

// export const useFetchMovieById = () => {
//   const [movieById, setMovieById] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { movieId } = useParams;
//   useEffect(() => {
//     // if (trendMovies !== 0) return;
//     async function fetchMovieById() {
//       setLoading(true);
//       try {
//         const movieById = await getMovieById(movieId);
//         setMovieById(movieById);
//         console.log(movieById);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchMovieById();
//   }, [movieId]);

//   return { movieById, loading, error };
// };
