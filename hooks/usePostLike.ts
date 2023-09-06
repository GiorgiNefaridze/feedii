import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";
import { IData } from "./useIsLikedCkecker";

const endpoint = "/api/post/like";

export const usePostLike = () => {
  const postLike = async (data: IData) => {
    try {
      await (await axiosInstance()).post(endpoint, data);
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response.data?.response);
      }
    }
  };

  return { postLike };
};
