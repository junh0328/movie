import axios from 'axios';
import dotenv from 'dotenv';
import { ContentPageResponse } from '@/types/common';
import {
  Action,
  Comedy,
  Documentary,
  Horror,
  NetFlixMovieOriginals,
  // NetFlixOriginals,
  Romance,
  TopRated,
} from '@/apis';

dotenv.config();

// 커스텀 함수
/*
  export const fetchingGenresData = async (genre: string) => {
    try {
      const { data } = await axios.get<ContentPageResponse>(genre);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
*/

export const fetchTopRated = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(TopRated);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchNetFlixOriginals = async () => {
//   try {
//     const { data } = await axios.get<ContentPageResponse>(NetFlixOriginals);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const fetchNetFlixMovieOriginals = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(NetFlixMovieOriginals);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAction = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(Action);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchComedy = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(Comedy);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchHorror = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(Horror);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchRomance = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(Romance);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDocumentary = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(Documentary);
    return data;
  } catch (error) {
    console.error(error);
  }
};
