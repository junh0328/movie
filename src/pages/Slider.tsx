import React, { FC, useEffect, useState } from 'react';
import dotenv from 'dotenv';
import { MainWrapper } from './style';
import Billboard from '@/components/organisms/Billboard';
import { SliderContainer, SliderItem } from '@/components/organisms/Slider';
import { Movie } from '@/types/movie';

dotenv.config();

const movies: Movie[] = [
  { id: 1, title: 'movie1', description: 'movie1 desc', photo: '/paris.jpeg' },
  { id: 2, title: 'movie2', description: 'movie2 desc', photo: '/paris.jpeg' },
  { id: 3, title: 'movie3', description: 'movie3 desc', photo: '/paris.jpeg' },
  { id: 4, title: 'movie4', description: 'movie4 desc', photo: '/paris.jpeg' },
  { id: 5, title: 'movie5', description: 'movie5 desc', photo: '/paris.jpeg' },
  { id: 6, title: 'movie6', description: 'movie6 desc', photo: '/paris.jpeg' },
  { id: 7, title: 'movie7', description: 'movie7 desc', photo: '/paris.jpeg' },
  { id: 8, title: 'movie8', description: 'movie8 desc', photo: '/paris.jpeg' },
  { id: 9, title: 'movie9', description: 'movie9 desc', photo: '/paris.jpeg' },
  { id: 10, title: 'movie10', description: 'movie10 desc', photo: '/paris.jpeg' },
  { id: 11, title: 'movie11', description: 'movie711desc', photo: '/paris.jpeg' },
  { id: 12, title: 'movie12', description: 'movie7 12esc', photo: '/paris.jpeg' },
  { id: 13, title: 'movie13', description: 'movie7 d13sc', photo: '/paris.jpeg' },
  { id: 14, title: 'movie14', description: 'movie7 de14c', photo: '/paris.jpeg' },
  { id: 15, title: 'movie15', description: 'movie7 des15', photo: '/paris.jpeg' },
  { id: 16, title: 'movie16', description: 'movie7 desc16', photo: '/paris.jpeg' },
];

const Home: FC = () => {
  return (
    <>
      {/* 메인 이미지가 뜨는 컴포넌트 현재는 스파이더맨 이미지 */}
      <Billboard />

      {/* Main 작성해야 할 부분이 이 밑입니다. 슬릭 작업 후에 재사용 가능한 컴포넌트로 변경 */}

      <MainWrapper>
        <div>
          <SliderContainer>
            {movies.map((movie) => {
              return <SliderItem key={movie.id} movie={movie} />;
            })}
          </SliderContainer>
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;
