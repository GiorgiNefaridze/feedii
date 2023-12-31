import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";

export interface IData {
  post_id: number;
  user_id: number;
}

const endpoint = "/api/post/liked-post";

export const useIsLikedCkecker = () => {
  const likedChecker = async (data: IData): Promise<boolean> => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).post(endpoint, data);

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response.data?.response);
      }
      return false;
    }
  };

  return { likedChecker };
};
