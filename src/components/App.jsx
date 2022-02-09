import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';
import { lazy, Suspense } from 'react';
// import { Outlet, Link } from 'react-router-dom';

// import { getTrendMovies } from '../services/MoviesApi';

const getTrendMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=e815f38922cafca80c1f07403a692f09'
  );
  console.log(response.data);
  return response.data;
};
getTrendMovies().then(data => console.log(data.results[0].title));
// getTrendMovies().then(data => console.log(data.results.title));
const useFetchTrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchTrendMovies() {
      setLoading(true);
      try {
        const trendMovies = await getTrendMovies().then(data =>
          console.log(data.results[0].title)
        );
        setTrendMovies(trendMovies);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    console.log(fetchTrendMovies);
    fetchTrendMovies();
  }, []);

  console.log(trendMovies);
  return { trendMovies, loading, error };
};

export const App = () => {
  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <Routes>
        <Route path="goit-react-hw-05-movies" element={<Layout />}>
          {/* <Route path="/fdgsd" element={<div>fdgsd</div>} index={true} />
          <Route path="/sdfadfs" element={<div>sdfadfs</div>} /> */}
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
