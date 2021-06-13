export const API_KEY = process.env.REACT_APP_API;
export const BASE_URL = `https://api.themoviedb.org/3`;

// fetching each genres number
export const Genre = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

// fetching each genre apis
export const NetFlixOriginals = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const NetFlixMovieOriginals = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;
export const TopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const Action = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Comedy = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const Horror = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const Romance = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const Documentary = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`;

// fetching additional apis
export const Adventure = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`;
export const Animation = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`;
export const Family = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`;
export const Fantasy = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14`;
export const Music = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402`;
export const ScienceFiction = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`;
export const War = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10752`;
export const Western = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`;

// latest apis (tv/ movies)
export const latestTV = `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`;
export const latestMovie = `${BASE_URL}/tv/latest?api_key=${API_KEY}&language=en-US`;

// fetching movie details
export const MovieDetail = (id: number) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

// fetching search query
export const SearchQuery = (query: string) =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false&sort_by=&query=${query}&language=en-US&page=1`;
