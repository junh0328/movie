import produce from 'immer';

const initialState = {
  movies: [],

  fetchMovieLoading: false,
  fetchMovieSuccess: false,
  fetchMovieFailure: null,
};

export const FETCHING_MOVIES_REQUEST = 'FETCHING_MOVIES_REQUSET' as const;
export const FETCHING_MOVIES_SUCCESS = 'FETCHING_MOVIES_SUCCESS' as const;
export const FETCHING_MOVIES_FAILURE = 'FETCHING_MOVIES_FAILURE' as const;

const movies = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_MOVIES_REQUEST: {
        draft.fetchMovieLoading = true;
        draft.fetchMovieSuccess = false;
        break;
      }
      case FETCHING_MOVIES_SUCCESS: {
        draft.fetchMovieLoading = false;
        draft.movies = draft.movies.concat(action.data);
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
