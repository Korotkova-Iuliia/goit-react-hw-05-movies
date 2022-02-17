import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e815f38922cafca80c1f07403a692f09';

export const getTrendMovies = async page => {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  console.log('TrendMovies');
  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  console.log('MovieById');
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  console.log('MovieCast');
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  console.log('MovieReviews');

  return data.results;
};

export const getSearchMovies = async (movie, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${movie}`
  );
  console.log('SearchMovies');
  return data.results;
};
