import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";

import {
  BillboardWrap,
  InfoTitleWrapper,
  InfoMetaLayer,
  InfoWrapper,
  LogoAndTextMetaLayer,
  MainWrapper,
} from "./style";
import spiderman from "../images/spiderman.png";
import logoTitle from "../images/logoTitle.png";
import { BiInfoCircle } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";

dotenv.config();

type Original = { id: number; name: string; backdrop_path: string };
type Toprate = {
  id: number;
  name: string;
  vote_average: number;
  vote_count: number;
  title: string;
  backdrop_path: string;
};

const API_KEY = process.env.REACT_APP_API;
const BASE_URL = `https://api.themoviedb.org/3`;
const NetFlixOriginals = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
const TopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;

const Home: FC = () => {
  const [orginals, setOriginals] = useState<Original[]>([]);
  const [topRates, setTopRates] = useState<Toprate[]>([]);
  const [upLoad, setUpLoad] = useState<Boolean>(false);

  useEffect(() => {
    if (upLoad === false) {
      fetchNetflixOriginals();
      fetchTopRated();
    }
  }, [upLoad]);

  // upLoad 를 통해서 상태관리를 하고 있는데, 한쪽만 패칭되도 보여주니, 둘다 패칭된 후에 컴포넌트를 보여줄 수 있도록 만들어야 할 듯
  const fetchNetflixOriginals = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(NetFlixOriginals);
      setOriginals(results.slice(0, 4));
      setUpLoad(true);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTopRated = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(TopRated);
      console.log("load TopRated datas", results);
      setTopRates(results.slice(0, 4));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <BillboardWrap>
        <img src={spiderman} alt="spiderman" />
        <InfoMetaLayer>
          <LogoAndTextMetaLayer>
            <InfoTitleWrapper>
              <img src={logoTitle} alt="spidermanLogo" />
            </InfoTitleWrapper>
            <InfoWrapper>
              유럽 여행에서 사랑을 고백하려 한 피터 파커. 근데 맙소사, 새로운
              악당의 출현이라니, 게다가 닉 퓨리가 찾아와 도움을 청하네. 이렇게
              된 이상 또 다시 세상을 구할 수밖에.
            </InfoWrapper>
            <button>
              <AiFillCaretRight />
              재생
            </button>
            <button>
              <BiInfoCircle />
              상세 정보
            </button>
          </LogoAndTextMetaLayer>
        </InfoMetaLayer>
      </BillboardWrap>

      {/* Main 작성해야 할 부분이 이 밑입니다. */}

      <MainWrapper>
        {upLoad ? (
          <div
            style={{
              display: " flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: "220px",
            }}
          >
            <div
              style={{
                marginTop: 20,
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bolder",
              }}
              onClick={fetchNetflixOriginals}
            >
              넷플릭스 오리지널
            </div>
            {orginals && (
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  listStyle: "none",
                  paddingLeft: 0,
                }}
              >
                {orginals.map((original) => (
                  <li key={original.id}>
                    <li>{original.name}</li>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${original.backdrop_path}`}
                      alt={original.name}
                      style={{ width: 400, marginRight: 10 }}
                    />
                  </li>
                ))}
              </ul>
            )}
            <div
              style={{
                marginTop: 20,
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bolder",
              }}
            >
              넷플릭스 Top Rated
            </div>
            {topRates && (
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: 0,
                }}
              >
                {topRates.map((topRate) => (
                  <li key={topRate.id} style={{ listStyle: "none" }}>
                    <li>
                      🌟 {topRate.vote_average}, Count with {topRate.vote_count}
                    </li>

                    <li>{topRate.title}</li>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${topRate.backdrop_path}`}
                      alt={topRate.name}
                      style={{ width: 400, marginRight: 10 }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>...Loading</div>
        )}
      </MainWrapper>
    </>
  );
};

export default Home;
