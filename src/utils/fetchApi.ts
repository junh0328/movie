import axios, { Method } from 'axios';

export type ErrorType = { error?: 1 | true; message?: string };

type Name = 'FailRequest' | 'NetworkEror';

class CustomError extends Error {
  constructor(name: Name) {
    super();
    this.name = name;
  }
}

export const fetchApi = <T, S = null>(param: { url: string; method: Method }) => {
  return async (paramData?: S) => {
    try {
      const data = (
        await axios({
          url: param.url,
          method: param.method,
          data: paramData,
        })
      ).data as T;

      return data;
    } catch (error) {
      console.error(error);
      throw new CustomError('FailRequest');
    }
  };
};
