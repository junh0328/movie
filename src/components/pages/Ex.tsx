import { RootState } from '@/reducers';
import { fetchingMoviesRequest } from '@/reducers/movies';
import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SliderContainer, SliderItem } from '../organisms/Slider';
import { MainWrapper } from './style';

const Ex = () => {
  const { movie } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const callMovie = useCallback(() => {
    if (!movie.length) {
      dispatch(fetchingMoviesRequest());
    }
  }, [movie.length]);

  useEffect(() => {
    console.log('movie 배열 감지: ', movie);
  }, [movie]);

  return (
    <>
      <div style={{ marginTop: 200 }}>
        <button style={{ color: 'black' }} onClick={callMovie}>
          영화 데이터 호출하기
        </button>
      </div>
      <MainWrapper>
        {movie.length ? (
          <SliderContainer>
            {movie.map((m) => {
              return <SliderItem key={m.id} movie={m} />;
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
