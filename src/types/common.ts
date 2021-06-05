// status
export type StatusType = 'idle' | 'loading' | 'failed';

// createAsyncThunk input status error type
export type MyKnownError = {
  errorMessage: string;
};

export type Ash = {
  name: string;
};

export type Movie = {
  id: number;
  name: string;
};

export type Original = { id: number; name: string; backdrop_path: string };

export type Toprate = {
  id: number;
  name: string;
  vote_average: number;
  vote_count: number;
  title: string;
  backdrop_path: string;
};

export type ResponseType = {
  results: [];
};

export type Genre = {
  id: number;
  name: string;
};

export type ContentDetail = {
  adult: boolean;
  backdrop_path: string;
  title: string;
  name: string;
  genres: Genre[];
  id: number;
  overview: string;
  revenue: number;
  runtime: number;
  status: string;
  release_date: string;
};

export type production_companies = {
  id: string;
  logo_path: string;
  name: string;
};

export type videosResult = {
  results: videos[];
};
export type videos = {
  id: string;
  key: string;
  name: string;
};

export type Billbord = {
  id: number;
  name: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  title: string;
  production_companies: production_companies[];
  videos: videosResult;
};

export type PageResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type ContentPageResponse = PageResponse<ContentDetail>;
