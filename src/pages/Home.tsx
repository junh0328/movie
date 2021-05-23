import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { MainWrapper } from './style';
import { Original, Toprate, ResponseType } from '@/types/common';
import Billboard from '@/components/Organisms/Billboard';
import { NetFlixOriginals, TopRated } from '@/apis';
import Modal from '@/components/Organisms/Modal';

dotenv.config();

const Home: FC = () => {
  const [orginals, setOriginals] = useState<Original[]>([]);
  const [topRates, setTopRates] = useState<Toprate[]>([]);
  const [upLoad, setUpLoad] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (upLoad === false) {
      fetchAPIs();
    }
  });

  const fetchAPIs = async () => {
    try {
      await Promise.all([fetchNetflixOriginals(), fetchTopRated()]).then(() => {
        setUpLoad(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNetflixOriginals = async () => {
    try {
      const {
        data: { results },
      } = await axios.get<ResponseType>(NetFlixOriginals);
      setOriginals(results.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTopRated = async () => {
    try {
      const {
        data: { results },
      } = await axios.get<ResponseType>(TopRated);
      setTopRates(results.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  };
  const selectContent = (id: number) => setSelectedContent(id);
  return (
    <>
      {/* 메인 이미지가 뜨는 컴포넌트 현재는 스파이더맨 이미지 */}
      <Billboard />

      {/* Main 작성해야 할 부분이 이 밑입니다. 슬릭 작업 후에 재사용 가능한 컴포넌트로 변경 */}

      <MainWrapper>
        {upLoad ? (
          <div
            style={{
              display: ' flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              width: '220px',
            }}
          >
            <div
              style={{
                marginTop: 20,
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bolder',
              }}
              onClick={fetchNetflixOriginals}
            >
              넷플릭스 오리지널
            </div>
            {orginals && (
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  listStyle: 'none',
                  paddingLeft: 0,
                }}
              >
                {orginals.map((original) => (
                  <li key={original.id} onClick={() => selectContent(original.id)}>
                    <ul>
                      <li>{original.name}</li>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${original.backdrop_path}`}
                        alt={original.name}
                        style={{ width: 400, marginRight: 10 }}
                      />
                    </ul>
                  </li>
                ))}
              </ul>
            )}
            <div
              style={{
                marginTop: 20,
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bolder',
              }}
            >
              넷플릭스 Top Rated
            </div>
            {topRates && (
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingLeft: 0,
                }}
              >
                {topRates.map((topRate) => (
                  <li key={topRate.id} style={{ listStyle: 'none' }} onClick={() => selectContent(topRate.id)}>
                    <ul>
                      <li>
                        🌟 {topRate.vote_average}, Count with {topRate.vote_count}
                      </li>

                      <li>{topRate.title}</li>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${topRate.backdrop_path}`}
                        alt={topRate.name}
                        style={{ width: 400, marginRight: 10 }}
                      />
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>...Loading</div>
        )}
      </MainWrapper>
      {selectedContent && <Modal contentId={selectedContent} onClickHandler={() => setSelectedContent(undefined)} />}
    </>
  );
};

export default Home;
