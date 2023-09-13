import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";
import { IData } from "./useIsLikedCkecker";

const endpoint = "/api/post/check-bookmark";

export const useBookmarkChecker = () => {
  const bookmarkChecker = async (data: IData) => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).post(endpoint, data);

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  return { bookmarkChecker };
};
