import React, { FC, useEffect, useState } from 'react';
import dotenv from 'dotenv';
import { MainWrapper, SliderName } from './style';
import Billboard from '@/components/organisms/Billboard';
import { SliderContainer, SliderItem } from '@/components/organisms/Slider';
import {
  useAction,
  useComedy,
  useDocumentary,
  useHorror,
  useRomance,
  useNetFlixOMovieOriginals,
  // useNetFlixOriginals,
  useTopRated,
} from '@/hooks/movie';

dotenv.config();

const Home: FC = () => {
  const [upLoad, setUpLoad] = useState(false);

  const { topRatedMovies } = useTopRated();
  // const { NetFlixOriginals } = useNetFlixOriginals();
  const { NetFlixMovieOriginals } = useNetFlixOMovieOriginals();
  const { Action } = useAction();
  const { Comedy } = useComedy();
  const { Horror } = useHorror();
  const { Romance } = useRomance();
  const { Documentary } = useDocumentary();

  useEffect(() => {
    if (!upLoad) {
      setTimeout(() => setUpLoad(true), 2000);
    }
  });

  return (
    <>
      <Billboard />

      {upLoad ? (
        <MainWrapper>
          <div>
            <SliderName>높은 순위의 컨텐츠</SliderName>
            {topRatedMovies.length && (
              <SliderContainer>
                {topRatedMovies.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          {/* <div>
            {NetFlixOriginals.length && (
              <SliderContainer>
                {NetFlixOriginals.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div> */}
          <div>
            <SliderName>넷플릭스 오리지널 영화</SliderName>
            {NetFlixMovieOriginals.length && (
              <SliderContainer>
                {NetFlixMovieOriginals.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>코미디</SliderName>
            {Comedy.length && (
              <SliderContainer>
                {Comedy.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>호러, 공포</SliderName>
            {Horror.length && (
              <SliderContainer>
                {Horror.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>로망스</SliderName>
            {Romance.length && (
              <SliderContainer>
                {Romance.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>액션</SliderName>
            {Action.length && (
              <SliderContainer>
                {Action.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>다큐멘터리</SliderName>
            {Documentary.length && (
              <SliderContainer>
                {Documentary.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
        </MainWrapper>
      ) : (
        <h1 style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>로딩중</h1>
      )}
    </>
  );
};

export default Home;
