import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";
import { IData } from "./useIsLikedCkecker";

const endpoint = "/api/post/bookmark";

export const useBookmark = () => {
  const bookmark = async (data: IData) => {
    try {
      await (await axiosInstance()).post(endpoint, data);
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response.data?.response);
      }
    }
  };

  return { bookmark };
};
