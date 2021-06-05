import { useState, useEffect } from 'react';
import { ContentDetail } from '@/types/common';
import { fetchNetFlixOriginals, fetchTopRated } from '@/apis/movie';

export const useTopRated = () => {
  const [data, setData] = useState<ContentDetail[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchTopRated();

      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { topRatedMovies: data };
};

export const useNetFlixOriginals = () => {
  const [data, setData] = useState<ContentDetail[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchNetFlixOriginals();

      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { NetFlixOriginals: data };
};
