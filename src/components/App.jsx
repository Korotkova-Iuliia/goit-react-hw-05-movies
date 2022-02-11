import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';
// import { lazy, Suspense } from 'react';
import { Home } from 'pages';
import { MovieCard } from 'pages';
// import { UseFetchTrendMovies } from 'hooks';
import SearchMovies from '../components/SearchMovies/SearchMovies';
// import {
//   getTrendMovies,
//   getSearchMovies,
//   getMovieById,
// } from '../services/MoviesApi';

import { Outlet, Link } from 'react-router-dom';

export const App = () => {
  // const [trendMovies, setTrendMovies] = useState([]);
  // const [searchMovies, setsearchMovies] = useState([]);
  // const [moviesbyId, setMoviesbyId] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const useFetchTrendMovies = () => {
  // useEffect(() => {
  //   if (trendMovies === '') return;
  //   async function fetchTrendMovies() {
  //     setError(error);
  //     setLoading(true);
  //     try {
  //       const trendMovies = await getTrendMovies();
  //       setTrendMovies(trendMovies);
  //       console.log(trendMovies);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchTrendMovies();
  // }, []);

  // const useFetchSearchMovies = () => {
  //   useEffect(() => {
  //     if (searchMovies === '') {
  //       return;
  //     }
  //     const getAxiosgetSearchMovies = async () => {
  //       setLoading(true);
  //       try {
  //         const data = await getSearchMovies(searchMovies);
  //         // setSearchMovies(searchMovies);
  //         setLoading(false);
  //       } catch (error) {
  //         console.log('sorry, try again later');
  //       }
  //     };
  //     getAxiosgetSearchMovies();
  //   }, []);
  // };
  // const handleSearchBar = searchMovies => {
  //   setsearchMovies(searchMovies);
  // };

  //
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} index={true} />
            <Route path="/movies/:movieId" element={<MovieCard />} />
          </Route>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/*" element={<MovieCard />} /> */}
          </Route>
        </Routes>

        {/* <SearchMovies onSearch={handleSearchBar} /> */}
      </main>
    </>
  );
};
