import axios from 'axios';

export const getTrendMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=e815f38922cafca80c1f07403a692f09'
  );
  console.log(response.data);
  return response.data;
};
const movies = getTrendMovies().then(data => console.log(data.results));
console.log(movies);
// export const getPublicationById = async id => {
//   const response = await axios.get(`/publications/${id}`);
//   return response.data;
// };

// export const addPublication = async data => {
//   const response = await axios.post('/publications', data);
//   return response.data;
// };

// export const deletePublication = async id => {
//   const response = await axios.delete(`/publications/${id}`);
//   return response.data;
// };
