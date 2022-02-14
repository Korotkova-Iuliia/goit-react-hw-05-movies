// import { useEffect, useState } from 'react';
// import { getSearchMovies } from 'MoviesApi';
// import { MovieCard } from './MovieCard';

// export const SearchMovies = () => {
//   const [trendMovies, setTrendMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     // if (trendMovies !== 0) return;
//     async function fetchSearchMovies() {
//       setLoading(true);
//       try {
//         const trendMovies = await getSearchMovies();
//         setTrendMovies(trendMovies);
//         console.log(trendMovies);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchSearchMovies();
//   }, []);
//   const useFetchSearchMovies = () => {
//     useEffect(() => {
//       if (searchMovies === '') {
//         return;
//       }
//       const getAxiosgetSearchMovies = async () => {
//         setLoading(true);
//         try {
//           const data = await getSearchMovies(searchMovies);
//           // setSearchMovies(searchMovies);
//           setLoading(false);
//         } catch (error) {
//           console.log('sorry, try again later');
//         }
//       };
//       getAxiosgetSearchMovies();
//     }, []);
//   };
//   const handleSearchBar = searchMovies => {
//     setsearchMovies(searchMovies);
//   };
//   return <MovieCard />;
// };
