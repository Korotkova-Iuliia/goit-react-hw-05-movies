import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';
import { lazy, Suspense } from 'react';
import MoviesListTitle from '../pages/MoviesListTitle';
// import { Outlet, Link } from 'react-router-dom';

// import { getTrendMovies } from '../services/MoviesApi';

export const App = () => {
  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<MoviesListTitle />} index={true} />
          {/* <Route path="/sdfadfs" element={<div>sdfadfs</div>} /> */}
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
};
// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route path="preview" element={<PreviewPage />} />
//     <Route path="list" element={<ListPage />} />
//     <Route path="list/:itemId" element={<ItemPage />} />
//     <Route path="create" element={<AddItemPage />} />
//     <Route path="*" element={<Navigate to="/" />} />
//   </Route>
// </Routes>
