import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';
// import { lazy, Suspense } from 'react';
import { Home, MovieCard, Cast, Reviews, SearchMoviesPage } from 'pages';
// import { UseFetchTrendMovies } from 'hooks';
import { SearchMovies } from '../components/SearchMovies/SearchMovies';

import { Outlet, Link } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} index={true} />
            <Route path="movies" element={<SearchMoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieCard />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/*" element={<Navigate />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};
// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route element={<Home />} index={true} />
//     <Route path="movies" element={<SearchMoviesPage />}>
//       <Route path=":movieId" element={<MovieCard />}>
//         <Route path="cast" element={<Cast />} />
//         <Route path="reviews" element={<Reviews />} />
//       </Route>
//     </Route>
//   </Route>

//   <Route path="/*" element={<Navigate />} />
// </Routes>;
