import { axiosInstance } from "../api/baseURL";
import { IData } from "./useIsLikedCkecker";

const endpoint = "/api/post/bookmark";

export const useRemoveBookmark = () => {
  const removeBookmark = async (data: IData) => {
    try {
      await (
        await axiosInstance()
      ).delete(endpoint + `?post_id=${data.post_id}&user_id=${data.user_id}`);
    } catch (error) {
      console.error(error.response.data?.response);
    }
  };

  return { removeBookmark };
};
