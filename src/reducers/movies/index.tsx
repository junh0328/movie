import { ContentDetail } from '@/types/common';
import produce from 'immer';

// intialState의 타입 정의
export interface movieInitialState {
  movie: ContentDetail[];

  fetchMovieLoading: boolean;
  fetchMovieSuccess: boolean;
  fetchMovieFailure: null | Error;
}

// intialState 정의
const initialState: movieInitialState = {
  movie: [],

  fetchMovieLoading: false,
  fetchMovieSuccess: false,
  fetchMovieFailure: null,
};

// 액션 정의
export const FETCHING_MOVIES_REQUEST = 'FETCHING_MOVIES_REQUSET' as const;
export const FETCHING_MOVIES_SUCCESS = 'FETCHING_MOVIES_SUCCESS' as const;
export const FETCHING_MOVIES_FAILURE = 'FETCHING_MOVIES_FAILURE' as const;

// 액션에 대한 타입 정의
export interface FetchingMoviesRequest {
  type: typeof FETCHING_MOVIES_REQUEST;
}

export interface FetchingMoviesSuccess {
  type: typeof FETCHING_MOVIES_SUCCESS;
  movie: ContentDetail;
  data: [];
}

export interface FetchingMoviesFailure {
  type: typeof FETCHING_MOVIES_FAILURE;
  error: Error;
}

// 리듀서에 들어갈 액션 타입에 대한 액션 생성 함수 정의 ( action: FetchingMovie ) 부분
export const fetchingMoviesRequest = (): FetchingMoviesRequest => ({
  type: FETCHING_MOVIES_REQUEST,
});

export const fetchingMoviesSuccess = (movie: ContentDetail, data: []): FetchingMoviesSuccess => ({
  type: FETCHING_MOVIES_SUCCESS,
  movie,
  data,
});

export const fetchingMoviesFailure = (error: Error): FetchingMoviesFailure => ({
  type: FETCHING_MOVIES_FAILURE,
  error,
});

// 리듀서에 들어갈 액션에 대한 타입 정의 (액션 생성 함수)
export type FetchingMovie =
  | ReturnType<typeof fetchingMoviesRequest>
  | ReturnType<typeof fetchingMoviesSuccess>
  | ReturnType<typeof fetchingMoviesFailure>;

const movies = (state: movieInitialState = initialState, action: FetchingMovie) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_MOVIES_REQUEST: {
        draft.fetchMovieLoading = true;
        draft.fetchMovieSuccess = false;
        break;
      }
      case FETCHING_MOVIES_SUCCESS: {
        draft.fetchMovieLoading = false;
        draft.fetchMovieSuccess = true;
        draft.movie = draft.movie.concat(action.data);
        break;
      }
      case FETCHING_MOVIES_FAILURE: {
        draft.fetchMovieSuccess = false;
        draft.fetchMovieFailure = action.error;
        break;
      }
      default:
        return state;
    }
  });

export default movies;
