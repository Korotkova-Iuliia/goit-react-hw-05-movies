import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e815f38922cafca80c1f07403a692f09';

export const getTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  console.log(data.results);
  return data.results;
};

console.log(getTrendMovies().then(data => console.log(data.results)));

export const getMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}/`);
  // console.log(data.results);
  return data.results;
};

export const getSearchMovies = async movie => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${movie}`
  );
  return data.results;
};
