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
  genres: Genre[];
  id: number;
  overview: string;
  revenue: number;
  runtime: number;
  status: string;
  release_date: string;
};

export type QueryType = {
  adult: string;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
};
