import axios from 'axios';

const api_key = 'd256ac876828e9bd801557ca6a813021';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: api_key,
  },
});

export const moviesFetch = async () => {
  const response = await movieApi.get('trending/movie/day');
  return response.data.results;
};

export const fetchMoviesByName = async searchQuery => {
  const response = await movieApi.get('/search/movie', {
    params: { query: searchQuery },
  });
  return response.data.results;
};

export const fetchMovieById = async id => {
  const response = await movieApi.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieByCast = async id => {
  const response = await movieApi.get(`/movie/${id}/credits`);
  return response.data;
};

export const fetchMovieByReviews = async id => {
  const response = await movieApi.get(`/movie/${id}/reviews`);
  return response.data;
};