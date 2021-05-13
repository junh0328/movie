import axios, { Method } from "axios";

export type ErrorType = { error?: 1 | true; message?: string };

const errorHandler = (e: Error) => {
  console.error(e);
};

export const fetchApi =
  <T, S = null>(param: { url: string; method: Method }) =>
  async (paramData?: S) => {
    try {
      const data = (
        await axios({
          url: param.url,
          method: param.method,
          data: paramData,
        })
      ).data as T;

      return data;
    } catch (e) {
      errorHandler(e);
    }
  };
