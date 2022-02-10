import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';
// import { lazy, Suspense } from 'react';
import MoviesListTitle from '../pages/MoviesListTitle';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import {
  getTrendMovies,
  getSearchMovies,
  getMovieById,
} from '../services/MoviesApi';
import useFetchTrendMovies from '../hooks/useFetchTrendMovies';
import { Outlet, Link } from 'react-router-dom';

export const App = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [searchMovies, setsearchMovies] = useState([]);
  const [moviesbyId, setMoviesbyId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const useFetchTrendMovies = () => {
  useEffect(() => {
    if (trendMovies === '') return;
    async function fetchTrendMovies() {
      setError(error);
      setLoading(true);
      try {
        const trendMovies = await getTrendMovies();
        setTrendMovies(trendMovies);
        console.log(trendMovies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendMovies();
  }, []);
  useEffect(() => {
    // if (trendMovies === '') return;
    async function fetchMoviesById() {
      setError(error);
      setLoading(true);
      try {
        const moviesbyId = await getMovieById();
        setMoviesbyId(moviesbyId);
        console.log(moviesbyId);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesById();
  }, []);
  // };
  // useFetchTrendMovies();
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

  return (
    <>
      <main>
        <h1>Trend movies</h1>
        {/* <MoviesListTitle trend={useFetchTrendMovies} /> */}
        {/* <SearchMovies onSearch={handleSearchBar} /> */}

        <>
          {loading}
          {!error && (
            <ul>
              {trendMovies.map(({ id, original_title }) => (
                // <Link key={id} to={`/${id}`}>
                <li key={id}>{original_title}</li>
                // </Link>
              ))}
            </ul>
          )}
        </>
      </main>
    </>
  );
};
