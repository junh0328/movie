import { useState, useEffect } from 'react';
import { ContentDetail } from '@/types/common';
import {
  fetchAction,
  fetchComedy,
  fetchDocumentary,
  fetchHorror,
  fetchNetFlixMovieOriginals,
  fetchRomance,
  fetchTopRated,
} from '@/apis/movie';

// 커스텀 함수

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

export const useNetFlixOMovieOriginals = () => {
  const [data, setData] = useState<ContentDetail[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchNetFlixMovieOriginals();
      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { NetFlixMovieOriginals: data };
};

export const useAction = () => {
  const [data, setData] = useState<ContentDetail[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchAction();
      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { Action: data };
};

export const useComedy = () => {
  const [data, setData] = useState<ContentDetail[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchComedy();
      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { Comedy: data };
};

export const useHorror = () => {
  const [data, setData] = useState<ContentDetail[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchHorror();
      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { Horror: data };
};

export const useRomance = () => {
  const [data, setData] = useState<ContentDetail[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetchRomance();

      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { Romance: data };
};

export const useDocumentary = () => {
  const [data, setData] = useState<ContentDetail[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetchDocumentary();
      if (res) {
        setData(res.results);
      }
    })();
  }, []);

  return { Documentary: data };
};
