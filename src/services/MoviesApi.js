import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e815f38922cafca80c1f07403a692f09';

export const getTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  // console.log(data.results);
  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  console.log(data);
  // console.log(data.overview);
  // console.log(movieId);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  console.log(data);
  console.log(data.cast);
  console.log(data.cast[0].profile_path);
  return data;
};
// export const getMovieReviews = async movieId => {
//   const data = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
//   console.log(data);
//   // console.log(data.results);

//   return data.results;
// };

export const getSearchMovies = async movie => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${movie}`
  );
  return data;
};
