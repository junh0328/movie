import { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import ReactPlayer from 'react-youtube';
import axios from 'axios';

import {
  BillboardWrap,
  InfoMetaLayer,
  InfoTitleWrapper,
  InfoWrapper,
  LogoAndTextMetaLayer,
  InfoWrapperfade,
} from './style';
import Button from '@/components/atoms/Button/Billboard';
import { ResponseType, Billbord } from '@/types/common';
import { NetFlixMovieOriginals, MovieDetail } from '@/apis';

const Billboard = () => {
  const [billbord, setBillbord] = useState<Billbord>();
  const [logo, setLogo] = useState<boolean>(false);

  /*
    start: 시작
    end : 종료
    autoplay: 자동재생 여부(0, 1)
    mute: 음소거(0,1)
    rel: 종료후 관련 영상 표시 여부(0, 1)
    modestbranding: youtube logo 여부
    controls: playcontrols 표시여부
  */

  const onStart = useCallback(() => {
    alert('재생');
  }, []);
  const onDetail = useCallback(() => {
    alert('상세정보');
  }, []);

  const fetchBillbord = async () => {
    try {
      const {
        data: { results },
      } = await axios.get<ResponseType>(NetFlixMovieOriginals); //prop

      const { id } = results[Math.floor(Math.random() * results.length)]; //random movie

      const { data: billbordData } = await axios.get<Billbord>(MovieDetail(id), {
        params: {
          append_to_response: 'videos',
        },
      });

      setBillbord(billbordData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBillbord();
  }, []);

  useLayoutEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => setLogo(true), 1000);
    return () => clearTimeout(timer);
  }, [logo]);

  return billbord ? (
    <BillboardWrap>
      {billbord?.videos?.results[0] ? (
        <ReactPlayer
          videoId={billbord.videos.results[0] && billbord.videos.results[0].key}
          opts={{
            height: '900px',
            width: '100%',
            playerVars: {
              start: 0,
              end: 60,
              autoplay: 0,
              mute: 0,
              rel: 0,
              modestbranding: 1,
              controls: 0,
            },
          }}
        />
      ) : (
        <img alt={billbord.title} src={`https://image.tmdb.org/t/p/original/${billbord.backdrop_path}`} />
      )}

      <InfoMetaLayer>
        <LogoAndTextMetaLayer>
          <InfoTitleWrapper logo={logo}>
            {billbord.production_companies[0].logo_path ? (
              <img src={`https://image.tmdb.org/t/p/original${billbord.production_companies[0].logo_path}`} />
            ) : (
              <>No img</>
            )}
          </InfoTitleWrapper>
          <InfoWrapper>
            <InfoWrapperfade logo={logo}>{billbord.overview}</InfoWrapperfade>
          </InfoWrapper>
          <Button name="재생" onClick={onStart} type="button" />
          <Button name="상세정보" onClick={onDetail} type="button" />
        </LogoAndTextMetaLayer>
      </InfoMetaLayer>
    </BillboardWrap>
  ) : (
    <span>Loading</span>
  );
};

export default Billboard;
