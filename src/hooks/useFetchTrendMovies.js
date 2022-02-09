// import { useEffect, useState } from 'react';
// import { getTrendMovies } from '../services/MoviesApi';

// const useFetchTrendMovies = () => {
//   const [trendMovies, setTrendMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     async function fetchTrendMovies() {
//       setLoading(true);
//       try {
//         const trendMovies = await getTrendMovies();
//         setTrendMovies(trendMovies);
//       } catch (error) {
//         setError(error);
//       } finally {
//         console.log(error);
//         setLoading(false);
//       }
//     }
//     fetchTrendMovies();
//   }, [error, trendMovies]);
//   console.log(trendMovies);
//   return { trendMovies, loading, error };
// };
// // getTrendMovies().then(data => console.log(data.results));
