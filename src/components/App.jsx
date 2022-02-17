import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Layout } from '../components/layout/Layout';
const createChank = component => {
  return lazy(() =>
    import(`../pages/${component}/${component}`).then(module => ({
      default: module[component],
    }))
  );
};
const SearchMoviesPage = createChank('SearchMoviesPage');
const Reviews = createChank('Reviews');
const Home = createChank('Home');
const MovieCard = createChank('MovieCard');
const Cast = createChank('Cast');
export const App = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} index={true} />
              <Route path="movies" element={<SearchMoviesPage />} />
              <Route path="movies/:movieId" element={<MovieCard />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
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
