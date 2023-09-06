import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";
import { IData } from "./useIsLikedCkecker";

const endpoint = "/api/post/like";

export const useRemoveLike = () => {
  const removeLike = async (data: IData) => {
    try {
      await (
        await axiosInstance()
      ).delete(endpoint + `?post_id=${data.post_id}&user_id=${data.user_id}`);
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response.data?.response);
      }
    }
  };

  return { removeLike };
};
