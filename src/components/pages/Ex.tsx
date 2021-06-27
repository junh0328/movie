import { RootState } from '@/reducers';
import { FETCHING_MOVIES_REQUEST } from '@/reducers/movies';
import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Ex = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const callMovie = useCallback(() => {
    dispatch({
      type: FETCHING_MOVIES_REQUEST,
    });
  }, []);

  useEffect(() => {
    console.log('movies 배열 감지: ', movies);
  }, [movies]);

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
