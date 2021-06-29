import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { imssi, Animation } from '@/apis';
import { ContentDetail } from '@/types/common';
import { FETCHING_MOVIES_FAILURE, FETCHING_MOVIES_REQUEST, FETCHING_MOVIES_SUCCESS } from '@/reducers/movies';
import axios from 'axios';

// 내부에서 훅 함수를 못씀 (useMovieFetch)
async function fetchMoviesAPI() {
  try {
    const response = await axios.get(Animation);
    console.log(response);
    const result = response.data.results;
    return result;
  } catch (err) {
    console.error(err);
  }
}

type resultType = {
  result: ContentDetail[];
};

function* fetchMovies() {
  try {
    console.log('fetchMovie 들어옴');
    const result: resultType = yield call(fetchMoviesAPI);
    yield put({
      type: FETCHING_MOVIES_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.log(err);
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
