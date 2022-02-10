// import { useEffect, useState } from 'react';
// // import getTrendMovies from '../services/MoviesApi';

// const useFetchTrendMovies = () => {
//   const [trendMovies, setTrendMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     // if (trendMovies.lengs !== 0) return;
//     async function fetchTrendMovies() {
//       setError(error);
//       setLoading(true);
//       try {
//         const trendMovies = await getTrendMovies();

//         setTrendMovies(trendMovies);
//         console.log(trendMovies);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchTrendMovies();
//   });
//   console.log(trendMovies);
//   return { trendMovies, loading, error };
// };

// useFetchTrendMovies();
// // const useFetchTrendMovies = () => {
// //   const [trendMovies, setTrendMovies] = useState([]);

// //   console.log(trendMovies);
// //   useEffect(() => {
// //     if (trendMovies.lengs !== 0) return;
// //     async function fetchTrendMovies() {
// //       try {
// //         const data = await getTrendMovies();
// //         console.log(data.results);
// //         setTrendMovies(trendMovies => [...data.results]);
// //         // setTrendMovies(trendMovies => [...trendMovies, ...data.results]);/
// //       } catch (error) {
// //       } finally {
// //         console.log(trendMovies);
// //       }
// //     }
// //     console.log(trendMovies);
// //     console.log(fetchTrendMovies());
// //     fetchTrendMovies();
// //   }, [trendMovies]);
// //   console.log(trendMovies);
// //   return { trendMovies };
// // };
// // export default useFetchTrendMovies;
// // // console.log(getTrendMovies().then(({ results }) => console.log(results)));
// // getTrendMovies();
// // //  try {
// // //         const results = await getTrendMovies().then(({ results }) => {
// // //           return console.log(results);
// // //         });

// // //         setTrendMovies(trendMovies => [...trendMovies, ...results]);
// // //       } catch (error) {
// // //       } finally {
// // //         console.log(trendMovies);
// // //       }
// // //     }
// // // const useFetchTrendMovies = () => {
// // //   const [trendMovies, setTrendMovies] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   console.log(trendMovies);
// // //   useEffect(() => {
// // //     if (trendMovies.lengs !== 0) return;
// // //     async function fetchTrendMovies() {
// // //       setError(error);
// // //       setLoading(true);
// // //       try {
// // //         const results = await getTrendMovies();
// // //         console.log(results);
// // //         setTrendMovies(results);
// // //         console.log(results);
// // //         setTrendMovies(trendMovies => [...trendMovies, ...results]);
// // //       } catch (error) {
// // //         setError(error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }
// // //     fetchTrendMovies();
// // //   });
// // //   console.log(trendMovies);
// // //   return { trendMovies, loading, error };
// // // };
// // // export default useFetchTrendMovies;

// // // getTrendMovies().then(data => console.log(data.results));
