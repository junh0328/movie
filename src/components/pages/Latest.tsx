import { FC, useEffect, useState } from 'react';
import { MainWrapper, SliderName } from './style';
import { SliderContainer, SliderItem } from '@/components/organisms/Slider';
import { ContentDetail } from '@/types/common';
import {
  Action,
  ScienceFiction,
  Documentary,
  Horror,
  NetFlixMovieOriginals,
  Romance,
  Animation,
  Western,
  War,
  Family,
  Fantasy,
  Music,
} from '@/apis';
import useMovieFetch from '@/hooks/useMovieFetch';

const Latest: FC = () => {
  const [upLoad, setUpLoad] = useState<boolean>(false);
  const [secondUpload, setSecondUpload] = useState<boolean>(false);

  // previous
  const Animations = useMovieFetch<ContentDetail[]>(Animation, 'GET');
  const netFlixMovieOriginals = useMovieFetch<ContentDetail[]>(NetFlixMovieOriginals, 'GET');
  const action = useMovieFetch<ContentDetail[]>(Action, 'GET');
  const ScienceFictionDatas = useMovieFetch<ContentDetail[]>(ScienceFiction, 'GET');
  const documentary = useMovieFetch<ContentDetail[]>(Documentary, 'GET');
  const horror = useMovieFetch<ContentDetail[]>(Horror, 'GET');
  const romance = useMovieFetch<ContentDetail[]>(Romance, 'GET');

  // previous 에 데이터들을 비동기로 설정하기 위해 한 가지 배열 promises에 담음
  const promises = [Animations, netFlixMovieOriginals, action, ScienceFictionDatas, documentary, horror, romance];

  // next
  const WesternDatas = useMovieFetch<ContentDetail[]>(Western, 'GET');
  const WarDatas = useMovieFetch<ContentDetail[]>(War, 'GET');
  const FamilyDatas = useMovieFetch<ContentDetail[]>(Family, 'GET');
  const FantasyDatas = useMovieFetch<ContentDetail[]>(Fantasy, 'GET');
  const MusicDatas = useMovieFetch<ContentDetail[]>(Music, 'GET');
  // etc ...

  useEffect(() => {
    if (upLoad === false) {
      setTimeout(() => {
        fetchAPIs();
      }, 1000);
    }
  });

  /*
  Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));
  */

  const fetchAPIs = async () => {
    try {
      await Promise.allSettled([promises]).then(() => {
        setUpLoad(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 무한 스크롤을 위한 스크롤 이벤트 함수 만들기 (분리 전)
  useEffect(() => {
    if (upLoad && !secondUpload) {
      console.log('지금부터 스크롤이 작동합니다');
      // 업로드 완료 상황을 기점으로 해당 함수를 사용할 수 있도록 만듬

      const onScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
          fetchMoreApis();
          setSecondUpload(true);
        }
      };

      window.addEventListener('scroll', onScroll);
    }
  }, [upLoad]);

  const fetchMoreApis = async () => {
    try {
      await Promise.all([WesternDatas, WarDatas, FamilyDatas, FantasyDatas, MusicDatas]);
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
          {secondUpload && (
            <>
              <div>
                <SliderName>서부 장르</SliderName>
                {WesternDatas && (
                  <SliderContainer>
                    {WesternDatas.map((movie) => {
                      return <SliderItem key={movie.id} movie={movie} />;
                    })}
                  </SliderContainer>
                )}
              </div>
              <div>
                <SliderName>전쟁 장르</SliderName>
                {WarDatas && (
                  <SliderContainer>
                    {WarDatas.map((movie) => {
                      return <SliderItem key={movie.id} movie={movie} />;
                    })}
                  </SliderContainer>
                )}
              </div>
              <div>
                <SliderName>가족 장르</SliderName>
                {FamilyDatas && (
                  <SliderContainer>
                    {FamilyDatas.map((movie) => {
                      return <SliderItem key={movie.id} movie={movie} />;
                    })}
                  </SliderContainer>
                )}
              </div>
              <div>
                <SliderName>판타지 장르</SliderName>
                {FantasyDatas && (
                  <SliderContainer>
                    {FantasyDatas.map((movie) => {
                      return <SliderItem key={movie.id} movie={movie} />;
                    })}
                  </SliderContainer>
                )}
              </div>
              <div>
                <SliderName>음악 장르</SliderName>
                {MusicDatas && (
                  <SliderContainer>
                    {MusicDatas.map((movie) => {
                      return <SliderItem key={movie.id} movie={movie} />;
                    })}
                  </SliderContainer>
                )}
              </div>
            </>
          )}
        </MainWrapper>
      ) : (
        <h1 style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>데이터 로딩중...</h1>
      )}
    </>
  );
};

export default Latest;
