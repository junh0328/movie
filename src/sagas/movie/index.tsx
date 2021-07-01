import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { Adventure, Horror } from '@/apis';
import { ContentDetail } from '@/types/common';
import {
  FETCHING_ADVENTURE_FAILURE,
  FETCHING_ADVENTURE_REQUEST,
  FETCHING_ADVENTURE_SUCCESS,
  FETCHING_HORROR_FAILURE,
  FETCHING_HORROR_REQUEST,
  FETCHING_HORROR_SUCCESS,
  FETCHING_MOVIES_FAILURE,
  FETCHING_MOVIES_REQUEST,
  FETCHING_MOVIES_SUCCESS,
} from '@/reducers/movies';
import axios from 'axios';

// 내부에서 훅 함수를 못씀 (useMovieFetch)
async function fetchMoviesAPI(data: string) {
  try {
    const response = await axios.get(data);
    // console.log(response.data);
    const result = response.data.results;
    return result;
  } catch (err) {
    console.error(err);
  }
}

type resultType = {
  result: ContentDetail[];
};

function* fetchMovies(action: any) {
  try {
    const result: resultType = yield call(fetchMoviesAPI, action.data);
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

async function fetchAdventureAPI() {
  try {
    const response = await axios.get(Adventure);
    // console.log('adventure: ', response.data.results);
    const result = response.data.results;
    return result;
  } catch (err) {
    console.error(err);
  }
}

function* fetchAdventure() {
  try {
    const result: resultType = yield call(fetchAdventureAPI);
    yield put({
      type: FETCHING_ADVENTURE_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCHING_ADVENTURE_FAILURE,
      error: err.response,
    });
  }
}

async function fetchHorrorAPI() {
  try {
    const response = await axios.get(Horror);
    // console.log('Horror: ', response.data.results);
    const result = response.data.results;
    return result;
  } catch (err) {
    console.error(err);
  }
}

function* fetchHorror() {
  try {
    const result: resultType = yield call(fetchHorrorAPI);
    yield put({
      type: FETCHING_HORROR_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCHING_HORROR_FAILURE,
      error: err.response,
    });
  }
}

function* watchFetchMovies() {
  yield takeEvery(FETCHING_MOVIES_REQUEST, fetchMovies);
}
function* watchFetchAdventure() {
  yield takeEvery(FETCHING_ADVENTURE_REQUEST, fetchAdventure);
}
function* watchFetchHorror() {
  yield takeEvery(FETCHING_HORROR_REQUEST, fetchHorror);
}

export default function* movieSaga() {
  yield all([fork(watchFetchMovies), fork(watchFetchAdventure), fork(watchFetchHorror)]);
}
