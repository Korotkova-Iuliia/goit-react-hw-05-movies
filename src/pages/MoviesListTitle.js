// import { Link } from 'react-router-dom';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetchTrendMovies from '../hooks/useFetchTrendMovies';

// getTrendMovies().then(data => console.log(data.results[0].title));
//   return { trendMovies, loading, error };

const MoviesListTitle = () => {
  const { trendMovies, loading, error } = useFetchTrendMovies;

  console.log(trendMovies);

  return (
    <main>
      <h1>Trend movies</h1>
      {loading}

      {!error && (
        <ul>
          {trendMovies.map(trendMovie => (
            <li key={trendMovie.id}>
              {trendMovie.results}
              <Link to={`/home/${trendMovie.id}`}>{trendMovie.results}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
export default MoviesListTitle;
// {
//   /* {loading && <Loader />} */
// }
// // export const ItemPage = () => {
// //   const [item, setItem] = useState(null);

// //   useEffect(() => {
// //     async function fetchItem() {
// //       try {
// //         const item = await getPublicationById(itemId);
// //         setItem(item);
// //       } catch (error) {

// //     }
// //     fetchItem();
// //   }, []);

// //   return (
// //     <main>
// //       <Link to="/list">
// //         <FaArrowLeft /> К публикациям
// //       </Link>
// //       {item && (
// //         <>
// //           <hr />
// //           <button
// //             type="button"
// //             onClick={deleteItem}
// //             disabled={isDeleting}
// //             style={{ display: 'flex' }}
// //           >
// //             Удалить {isDeleting && <Loader size="sm" />}
// //           </button>
// //           <hr />
// //           <Publication item={item} />
// //         </>
// //       )}
// //     </main>
// //   );
// // };
