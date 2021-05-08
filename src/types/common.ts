export type Ash = {
  name: string;
};

export type Movie = { id: number; name: string };

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
