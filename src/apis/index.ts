export const API_KEY = process.env.REACT_APP_API;
export const BASE_URL = `https://api.themoviedb.org/3`;

// netflix apis
export const Genre = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const NetFlixOriginals = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const NetFlixMovieOriginals = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;
export const TopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const MovieDetail = (id: number) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
