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
import Billboard from '@/components/organisms/Billboard';
import Modal from '@/components/organisms/Modal';
import Main from '../organisms/Main';

const Slider2: FC = () => {
  const [upLoad, setUpLoad] = useState<boolean>(false);
  const [secondUpload, setSecondUpload] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<number | undefined>(undefined);

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

  const nextPomises = [WesternDatas, WarDatas, FamilyDatas, FantasyDatas, MusicDatas];

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
      await Promise.allSettled(nextPomises).then(() => {
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
        }
      };

      window.addEventListener('scroll', onScroll);
    }
  }, [upLoad]);

  const fetchMoreApis = async () => {
    try {
      await Promise.allSettled(promises).then(() => {
        setSecondUpload(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Billboard />
      {upLoad ? (
        <MainWrapper>
          <Main name={'전쟁'} genres={WarDatas} />
          <Main name={'판타지'} genres={FantasyDatas} />
          <Main name={'가족'} genres={FamilyDatas} />
          <Main name={'서부'} genres={WesternDatas} />
          <Main name={'음악'} genres={MusicDatas} />

          {secondUpload && (
            <>
              <Main name={'넷플릭스 오리지널'} genres={netFlixMovieOriginals} />
              <Main name={'SF 장르'} genres={ScienceFictionDatas} />
              <Main name={'호러, 공포'} genres={horror} />
              <Main name={'로망스'} genres={romance} />
              <Main name={'에니메이션'} genres={Animations} />
              <Main name={'액션'} genres={action} />
              <Main name={'다큐멘터리'} genres={documentary} />
            </>
          )}
        </MainWrapper>
      ) : (
        <h1 style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>데이터 로딩중...</h1>
      )}
      {selectedContent && <Modal contentId={selectedContent} onClickHandler={() => setSelectedContent(undefined)} />}
    </>
  );
};

export default Slider2;
