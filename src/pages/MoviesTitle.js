// // import { useState, useEffect } from 'react';
// // import { useParams, useNavigate, Link } from 'react-router-dom';
// // import { Publication } from 'components/Publication';
// import { getTrendMovies } from '../hooks/useFetchTrendMovies';

// export const Movies = () => {
//     //   const [item, setItem] = useState(null);

//     useEffect(() => {
//         async function fetchMovies() {
//             try {
//                 const item = await getTrendMovies().then(data => console.log(data.results));
//                 // setItem(item);
//             } catch (error) {
// console.log(error)
//             }
//             fetchMovies();
//         }, []);
//  useEffect(() => {

//   return (
//     <main>
//       <Link to="/list">
//         <FaArrowLeft /> К публикациям
//       </Link>
//       {item && (
//         <>
//           <hr />
//           <button
//             type="button"
//             onClick={deleteItem}
//             disabled={isDeleting}
//             style={{ display: 'flex' }}
//           >
//             Удалить {isDeleting && <Loader size="sm" />}
//           </button>
//           <hr />
//           <Publication item={item} />
//         </>
//       )}
//     </main>
//   );
// };
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
