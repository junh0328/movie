import { RootState } from '@/reducers';
import { fetchingMoviesRequest } from '@/reducers/movies';
import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Ex = () => {
  const { movies, fetchMovieSuccess } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const callMovie = useCallback(() => {
    if (!movies.length) {
      dispatch(fetchingMoviesRequest());
    }
  }, [movies.length]);

  useEffect(() => {
    console.log('movies 배열 감지: ', movies.length);
  }, [movies]);

  useEffect(() => {
    if (fetchMovieSuccess) {
      alert('데이터 패칭 성공!');
    }
  }, [fetchMovieSuccess]);

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <button style={{ color: 'black' }} onClick={callMovie}>
          영화 데이터 호출하기
        </button>
      </div>
      <div>
        {movies.length ? (
          <div>
            {movies.map((movie) => {
              return <div key={movie.id}>{movie.name ? movie.name : movie.original_title}</div>;
            })}
          </div>
        ) : (
          <div>영화 데이터 없음</div>
        )}
      </div>
    </div>
  );
};

export default Ex;
