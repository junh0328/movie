import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { Animation } from '@/apis';
import useMovieFetch from '@/hooks/useMovieFetch';
import { ContentDetail } from '@/types/common';
import { FETCHING_MOVIES_FAILURE, FETCHING_MOVIES_REQUEST, FETCHING_MOVIES_SUCCESS } from '@/reducers/movies';

function fetchMoviesAPI() {
  console.log('fetchMovie API 들어옴');
  const animation = useMovieFetch<ContentDetail[]>(Animation, 'GET');
  console.log(animation);
  return animation;
}

function* fetchMovies() {
  try {
    console.log('fetchMovie 들어옴');
    const result = call(fetchMoviesAPI);
    yield put({
      type: FETCHING_MOVIES_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FETCHING_MOVIES_FAILURE,
      error: err.response,
    });
  }
}

function* watchFetchMovies() {
  yield takeEvery(FETCHING_MOVIES_REQUEST, fetchMovies);
}

export default function* movieSaga() {
  yield all([fork(watchFetchMovies)]);
}
