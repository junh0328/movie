import { ContentDetail } from '@/types/common';
import produce from 'immer';

// intialState의 타입 정의
export interface movieInitialState {
  loadingDone: boolean;

  movie: ContentDetail[];
  music: ContentDetail[];
  adventure: ContentDetail[];
  horror: ContentDetail[];

  fetchMovieLoading: boolean;
  fetchMovieSuccess: boolean;
  fetchMovieFailure: null | Error;

  fetchAdventureLoading: boolean;
  fetchAdventureSuccess: boolean;
  fetchAdventureFailure: null | Error;

  fetchHorrorLoading: boolean;
  fetchHorrorSuccess: boolean;
  fetchHorrorFailure: null | Error;
}

// intialState 정의
const initialState: movieInitialState = {
  loadingDone: false,
  movie: [],
  music: [],
  adventure: [],
  horror: [],

  fetchMovieLoading: false,
  fetchMovieSuccess: false,
  fetchMovieFailure: null,

  fetchAdventureLoading: false,
  fetchAdventureSuccess: false,
  fetchAdventureFailure: null,

  fetchHorrorLoading: false,
  fetchHorrorSuccess: false,
  fetchHorrorFailure: null,
};

// 액션 정의
export const FETCHING_MOVIES_REQUEST = 'FETCHING_MOVIES_REQUSET' as const;
export const FETCHING_MOVIES_SUCCESS = 'FETCHING_MOVIES_SUCCESS' as const;
export const FETCHING_MOVIES_FAILURE = 'FETCHING_MOVIES_FAILURE' as const;

// 액션 정의
export const FETCHING_ADVENTURE_REQUEST = 'FETCHING_ADVENTURE_REQUSET' as const;
export const FETCHING_ADVENTURE_SUCCESS = 'FETCHING_ADVENTURE_SUCCESS' as const;
export const FETCHING_ADVENTURE_FAILURE = 'FETCHING_ADVENTURE_FAILURE' as const;

// 액션 정의
export const FETCHING_HORROR_REQUEST = 'FETCHING_HORROR_REQUSET' as const;
export const FETCHING_HORROR_SUCCESS = 'FETCHING_HORROR_SUCCESS' as const;
export const FETCHING_HORROR_FAILURE = 'FETCHING_HORROR_FAILURE' as const;

// 액션에 대한 타입 정의
export interface FetchingMoviesRequest {
  type: typeof FETCHING_MOVIES_REQUEST;
  data: string;
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

// 액션에 대한 타입 정의
export interface FetchingAdventureRequest {
  type: typeof FETCHING_ADVENTURE_REQUEST;
}

export interface FetchingAdventureSuccess {
  type: typeof FETCHING_ADVENTURE_SUCCESS;
  movie: ContentDetail;
  data: [];
}

export interface FetchingAdventureFailure {
  type: typeof FETCHING_ADVENTURE_FAILURE;
  error: Error;
}

// 액션에 대한 타입 정의
export interface FetchingHorrorRequest {
  type: typeof FETCHING_HORROR_REQUEST;
}

export interface FetchingHorrorSuccess {
  type: typeof FETCHING_HORROR_SUCCESS;
  movie: ContentDetail;
  data: [];
}

export interface FetchingHorrorFailure {
  type: typeof FETCHING_HORROR_FAILURE;
  error: Error;
}

// 리듀서에 들어갈 액션 타입에 대한 액션 생성 함수 정의 ( action: FetchingMovie ) 부분
export const fetchingMoviesRequest = (data: string): FetchingMoviesRequest => ({
  type: FETCHING_MOVIES_REQUEST,
  data,
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

export const fetchingAdventureRequest = (): FetchingAdventureRequest => ({
  type: FETCHING_ADVENTURE_REQUEST,
});

export const fetchingAdventureSuccess = (movie: ContentDetail, data: []): FetchingAdventureSuccess => ({
  type: FETCHING_ADVENTURE_SUCCESS,
  movie,
  data,
});

export const fetchingAdventureFailure = (error: Error): FetchingAdventureFailure => ({
  type: FETCHING_ADVENTURE_FAILURE,
  error,
});

export const fetchingHorrorRequest = (): FetchingHorrorRequest => ({
  type: FETCHING_HORROR_REQUEST,
});

export const fetchingHorrorSuccess = (movie: ContentDetail, data: []): FetchingHorrorSuccess => ({
  type: FETCHING_HORROR_SUCCESS,
  movie,
  data,
});

export const fetchingHorrorFailure = (error: Error): FetchingHorrorFailure => ({
  type: FETCHING_HORROR_FAILURE,
  error,
});

// 리듀서에 들어갈 액션에 대한 타입 정의 (액션 생성 함수)
export type FetchingMovie =
  | ReturnType<typeof fetchingMoviesRequest>
  | ReturnType<typeof fetchingMoviesSuccess>
  | ReturnType<typeof fetchingMoviesFailure>
  | ReturnType<typeof fetchingAdventureRequest>
  | ReturnType<typeof fetchingAdventureSuccess>
  | ReturnType<typeof fetchingAdventureFailure>
  | ReturnType<typeof fetchingHorrorRequest>
  | ReturnType<typeof fetchingHorrorSuccess>
  | ReturnType<typeof fetchingHorrorFailure>;

const movies = (state: movieInitialState = initialState, action: FetchingMovie) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_ADVENTURE_REQUEST:
      case FETCHING_MOVIES_REQUEST: {
        draft.fetchMovieLoading = true;
        draft.fetchMovieSuccess = false;
        break;
      }
      case FETCHING_HORROR_REQUEST: {
        draft.fetchHorrorLoading = true;
        draft.fetchHorrorSuccess = false;
        break;
      }

      case FETCHING_MOVIES_SUCCESS: {
        draft.fetchMovieLoading = false;
        draft.fetchMovieSuccess = true;
        draft.music = draft.music.concat(action.data);
        break;
      }
      case FETCHING_ADVENTURE_SUCCESS: {
        draft.fetchAdventureLoading = false;
        draft.fetchAdventureSuccess = true;
        draft.adventure = draft.adventure.concat(action.data);
        break;
      }

      case FETCHING_HORROR_SUCCESS: {
        draft.fetchHorrorLoading = false;
        draft.fetchHorrorSuccess = true;
        draft.horror = draft.horror.concat(action.data);
        break;
      }
      case FETCHING_MOVIES_FAILURE: {
        draft.fetchMovieSuccess = false;
        draft.fetchMovieFailure = action.error;
        break;
      }
      case FETCHING_ADVENTURE_FAILURE: {
        draft.fetchAdventureSuccess = false;
        draft.fetchAdventureFailure = action.error;
        break;
      }
      case FETCHING_HORROR_FAILURE: {
        draft.fetchHorrorSuccess = false;
        draft.fetchHorrorFailure = action.error;
        break;
      }

      default:
        return state;
    }
  });

export default movies;
