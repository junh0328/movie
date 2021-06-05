import React, { FC } from 'react';
import dotenv from 'dotenv';
import { MainWrapper } from './style';
import Billboard from '@/components/organisms/Billboard';
import { SliderContainer, SliderItem } from '@/components/organisms/Slider';
import { useTopRated } from '@/hooks/movie';

dotenv.config();

const Home: FC = () => {
  const { topRatedMovies } = useTopRated();

  return (
    <>
      {/* 메인 이미지가 뜨는 컴포넌트 현재는 스파이더맨 이미지 */}
      <Billboard />

      {/* Main 작성해야 할 부분이 이 밑입니다. 슬릭 작업 후에 재사용 가능한 컴포넌트로 변경 */}

      <MainWrapper>
        <div>
          {topRatedMovies.length ? (
            <SliderContainer>
              {topRatedMovies.map((movie) => {
                return <SliderItem key={movie.id} movie={movie} />;
              })}
            </SliderContainer>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;
