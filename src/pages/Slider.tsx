import React, { FC, useEffect, useState } from 'react';

import { MainWrapper, SliderName } from './style';
import Billboard from '@/components/organisms/Billboard';
import { SliderContainer, SliderItem } from '@/components/organisms/Slider';

import { ContentDetail } from '@/types/common';
import { Action, Comedy, Documentary, Horror, NetFlixMovieOriginals, Romance, TopRated } from '@/apis';
import useMovieFetch from '@/hooks/useMovieFetch';
import Modal from '@/components/organisms/Modal';

const Home: FC = () => {
  const [upLoad, setUpLoad] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<number | undefined>(undefined);

  const topRatedMovies = useMovieFetch<ContentDetail[]>(TopRated, 'GET');
  const netFlixMovieOriginals = useMovieFetch<ContentDetail[]>(NetFlixMovieOriginals, 'GET');
  const action = useMovieFetch<ContentDetail[]>(Action, 'GET');
  const comedy = useMovieFetch<ContentDetail[]>(Comedy, 'GET');
  const documentary = useMovieFetch<ContentDetail[]>(Documentary, 'GET');
  const horror = useMovieFetch<ContentDetail[]>(Horror, 'GET');
  const romance = useMovieFetch<ContentDetail[]>(Romance, 'GET');

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
            {topRatedMovies?.length && (
              <SliderContainer>
                {topRatedMovies.map((movie) => {
                  return (
                    <SliderItem
                      key={movie.id}
                      movie={movie}
                      showModal={() => {
                        setSelectedContent(movie.id);
                        console.log(movie.id);
                      }}
                    />
                  );
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>넷플릭스 오리지널 영화</SliderName>
            {netFlixMovieOriginals?.length && (
              <SliderContainer>
                {netFlixMovieOriginals.map((movie) => {
                  return (
                    <SliderItem
                      key={movie.id}
                      movie={movie}
                      showModal={() => {
                        setSelectedContent(movie.id);
                        console.log(movie.id);
                      }}
                    />
                  );
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>코미디</SliderName>
            {comedy?.length && (
              <SliderContainer>
                {comedy.map((movie) => {
                  return (
                    <SliderItem
                      key={movie.id}
                      movie={movie}
                      showModal={() => {
                        setSelectedContent(movie.id);
                        console.log(movie.id);
                      }}
                    />
                  );
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>호러, 공포</SliderName>
            {horror?.length && (
              <SliderContainer>
                {horror.map((movie) => {
                  return (
                    <SliderItem
                      key={movie.id}
                      movie={movie}
                      showModal={() => {
                        setSelectedContent(movie.id);
                        console.log(movie.id);
                      }}
                    />
                  );
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>로망스</SliderName>
            {romance?.length && (
              <SliderContainer>
                {romance.map((movie) => {
                  return (
                    <SliderItem
                      key={movie.id}
                      movie={movie}
                      showModal={() => {
                        setSelectedContent(movie.id);
                        console.log(movie.id);
                      }}
                    />
                  );
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>액션</SliderName>
            {action?.length && (
              <SliderContainer>
                {action.map((movie) => {
                  return (
                    <SliderItem
                      key={movie.id}
                      movie={movie}
                      showModal={() => {
                        setSelectedContent(movie.id);
                        console.log(movie.id);
                      }}
                    />
                  );
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>다큐멘터리</SliderName>
            {documentary?.length && (
              <SliderContainer>
                {documentary.map((movie) => {
                  return (
                    <SliderItem
                      key={movie.id}
                      movie={movie}
                      showModal={() => {
                        setSelectedContent(movie.id);
                        console.log(movie.id);
                      }}
                    />
                  );
                })}
              </SliderContainer>
            )}
          </div>
          {selectedContent && (
            <Modal contentId={selectedContent} onClickHandler={() => setSelectedContent(undefined)} />
          )}
        </MainWrapper>
      ) : (
        <h1 style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>로딩중</h1>
      )}
    </>
  );
};

export default Home;
