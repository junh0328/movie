import { useState, useEffect } from 'react';
import { ContentDetail } from '@/types/common';
import { fetchTopRated } from '@/apis/movie';

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
