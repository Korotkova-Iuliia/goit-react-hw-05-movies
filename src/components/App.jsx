import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../components/layout/Layout';
// import { lazy, Suspense } from 'react';
import MoviesListTitle from '../pages/MoviesListTitle';

import { Outlet, Link } from 'react-router-dom';

export const App = () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const API_KEY = 'e815f38922cafca80c1f07403a692f09';
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getTrendMovies = async () => {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    console.log(data.results);
    return data.results;
  };
  const useFetchTrendMovies = () => {
    useEffect(() => {
      // if (trendMovies === '') return;
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
    console.log(trendMovies);
  };
  useFetchTrendMovies();
  return (
    <>
      <main>
        <h1>Trend movies</h1>
        <>
          {loading}
          {!error && (
            <ul>
              {trendMovies.map(({ id, original_title }) => (
                <Link key={id} to={`/${id}`}>
                  <li>{original_title}</li>
                </Link>
              ))}
            </ul>
          )}
        </>
      </main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<MoviesListTitle />} index={true} />
          {/* <Route path="/home" element={<div>sdfadfs</div>} /> */}
        </Route>
      </Routes>
    </>
  );
};

// рабочий код
// export const App = () => {
//   return (
//     <>
//       {/* <MoviesListTitle />  */}
//       {/* <Suspense fallback={<h1>Loading...</h1>}> */}
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/home" element={<MoviesListTitle />} index={true} />
//           {/* <Route path="/home" element={<div>sdfadfs</div>} /> */}
//         </Route>
//       </Routes>
//       {/* </Suspense> */}
//     </>
//   );
// };

// eample
// // <Routes>
// //   <Route path="/" element={<Layout />}>
// //     <Route path="preview" element={<PreviewPage />} />
// //     <Route path="list" element={<ListPage />} />
// //     <Route path="list/:itemId" element={<ItemPage />} />
// //     <Route path="create" element={<AddItemPage />} />
// //     <Route path="*" element={<Navigate to="/" />} />
// //   </Route>
// // </Routes>
