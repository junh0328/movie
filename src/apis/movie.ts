import axios from 'axios';
import dotenv from 'dotenv';
import { ContentPageResponse } from '@/types/common';
import { TopRated } from '@/apis';

dotenv.config();

export const fetchTopRated = async () => {
  try {
    const { data } = await axios.get<ContentPageResponse>(TopRated);
    return data;
  } catch (error) {
    console.error(error);
  }
};
