import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

axios.defaults.baseURL = process.env.REACT_APP_TMDB_BASE_URL;
// REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
console.log('BASE_URL:', process.env.REACT_APP_TMDB_BASE_URL);
console.log('API_KEY:', process.env.REACT_APP_TMDB_KEY);
// --------------- Get Trend Movies --------------
export const getTrendMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
    console.log('TrendMovies fetched');
    return data.results;
  } catch (error) {
    console.error('Error fetching TrendMovies:', error);
    throw error;
  }
};
// ----------- Get movie by Id  ---------------------------
export const getMovieById = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    console.log('MovieById fetched');
    return data;
  } catch (error) {
    console.error('Error fetching MovieById:', error);
    throw error;
  }
};
// ----------- Get movie cast  ---------------------------
export const getMovieCast = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    console.log('MovieCast fetched');
    return data;
  } catch (error) {
    console.error('Error fetching MovieCast:', error);
    throw error;
  }
};
// ----------- Get movie reviews  ---------------------------
export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    console.log('MovieReviews fetched');
    return data.results;
  } catch (error) {
    console.error('Error fetching MovieReviews:', error);
    throw error;
  }
};
// ------------ Get search movies -------------------------
export const getSearchMovies = async (movie, page = 1) => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${movie}`
    );
    console.log('SearchMovies fetched');
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
