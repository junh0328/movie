import { RootState } from '@/reducers';
import { fetchingMoviesRequest } from '@/reducers/movies';
import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SliderContainer, SliderItem } from '../organisms/Slider';
import { MainWrapper } from './style';

const Ex = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const callMovie = useCallback(() => {
    if (!movies.length) {
      dispatch(fetchingMoviesRequest());
    }
  }, [movies.length]);

  useEffect(() => {
    console.log('movies 배열 감지: ', movies);
  }, [movies]);

  return (
    <>
      <div style={{ marginTop: 200 }}>
        <button style={{ color: 'black' }} onClick={callMovie}>
          영화 데이터 호출하기
        </button>
      </div>
      <MainWrapper>
        {movies.length ? (
          <SliderContainer>
            {movies.map((movie) => {
              return <SliderItem key={movie.id} movie={movie} />;
            })}
          </SliderContainer>
        ) : (
          <div>영화 데이터 없음</div>
        )}
      </MainWrapper>
    </>
  );
};

export default Ex;
