import { Music } from '@/apis';
import { RootState } from '@/reducers';
import { FETCHING_ADVENTURE_REQUEST, FETCHING_HORROR_REQUEST, FETCHING_MOVIES_REQUEST } from '@/reducers/movies';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../organisms/Main';
import { MainWrapper } from './style';

const Ex = () => {
  const { fetchAdventureSuccess, fetchHorrorSuccess, fetchMovieSuccess, adventure, music, horror } = useSelector(
    (state: RootState) => state.movies,
  );
  const dispatch = useDispatch();
  const [fetchingDone, setFetchingDone] = useState(false);

  useEffect(() => {
    if (!fetchingDone) {
      console.log('fetchingDone 호출!');
      fetchAPIs();
    }
  }, [fetchingDone]);

  useEffect(() => {
    if (fetchAdventureSuccess && fetchHorrorSuccess && fetchMovieSuccess) {
      console.log('Done it!');
      setFetchingDone(true);
    }
  }, [fetchAdventureSuccess, fetchHorrorSuccess, fetchMovieSuccess]);

  const fetchAPIs = () => {
    dispatch({
      type: FETCHING_ADVENTURE_REQUEST,
    });
    dispatch({
      // data 없이 보내기
      type: FETCHING_HORROR_REQUEST,
    });
    dispatch({
      // data를 포함해서 보내기
      type: FETCHING_MOVIES_REQUEST,
      data: Music,
    });
  };

  return (
    <>
      <div style={{ marginTop: 200 }}></div>
      <MainWrapper>
        {fetchingDone ? (
          <div>
            <Main name={'music'} genres={music} />
            <Main name={'어드벤처'} genres={adventure} />
            <Main name={'호러'} genres={horror} />
          </div>
        ) : (
          <div>영화 데이터 없음</div>
        )}
      </MainWrapper>
    </>
  );
};

export default Ex;
