import { FC, useEffect, useState } from 'react';
import { MainWrapper, SliderName } from './style';
import { SliderContainer, SliderItem } from '@/components/organisms/Slider';
import { ContentDetail } from '@/types/common';
import { Action, ScienceFiction, Documentary, Horror, NetFlixMovieOriginals, Romance, Animation } from '@/apis';
import useMovieFetch from '@/hooks/useMovieFetch';

const Latest: FC = () => {
  const [upLoad, setUpLoad] = useState(false);

  const Animations = useMovieFetch<ContentDetail[]>(Animation, 'GET');
  const netFlixMovieOriginals = useMovieFetch<ContentDetail[]>(NetFlixMovieOriginals, 'GET');
  const action = useMovieFetch<ContentDetail[]>(Action, 'GET');
  const ScienceFictionDatas = useMovieFetch<ContentDetail[]>(ScienceFiction, 'GET');
  const documentary = useMovieFetch<ContentDetail[]>(Documentary, 'GET');
  const horror = useMovieFetch<ContentDetail[]>(Horror, 'GET');
  const romance = useMovieFetch<ContentDetail[]>(Romance, 'GET');

  useEffect(() => {
    if (upLoad === false) {
      setTimeout(() => {
        fetchAPIs();
      }, 1000);
    }
  });

  const fetchAPIs = async () => {
    try {
      console.log('데이터 패칭중 ...');
      await Promise.all([
        Animations,
        netFlixMovieOriginals,
        action,
        ScienceFictionDatas,
        documentary,
        horror,
        romance,
      ]).then(() => {
        setUpLoad(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div style={{ marginBottom: '100px' }} />
      {upLoad ? (
        <MainWrapper>
          <div>
            <SliderName>애니메이션</SliderName>
            {Animations && (
              <SliderContainer>
                {Animations.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>넷플릭스 오리지널 영화</SliderName>
            {netFlixMovieOriginals && (
              <SliderContainer>
                {netFlixMovieOriginals.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>SF 장르</SliderName>
            {ScienceFictionDatas && (
              <SliderContainer>
                {ScienceFictionDatas.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>호러, 공포</SliderName>
            {horror && (
              <SliderContainer>
                {horror.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>로망스</SliderName>
            {romance && (
              <SliderContainer>
                {romance.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>액션</SliderName>
            {action && (
              <SliderContainer>
                {action.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
          <div>
            <SliderName>다큐멘터리</SliderName>
            {documentary && (
              <SliderContainer>
                {documentary.map((movie) => {
                  return <SliderItem key={movie.id} movie={movie} />;
                })}
              </SliderContainer>
            )}
          </div>
        </MainWrapper>
      ) : (
        <h1 style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>데이터 로딩중...</h1>
      )}
    </>
  );
};

export default Latest;
