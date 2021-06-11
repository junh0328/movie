import { useState, useEffect } from 'react';
import axios, { Method } from 'axios';

const useMovieFetch = <T>(url: string, method: Method) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      const res = (
        await axios({
          url: url,
          method: method,
        })
      ).data.results as T;

      if (res) {
        setData(res);
      }
    })();
  }, []);

  return data;
};

export default useMovieFetch;
