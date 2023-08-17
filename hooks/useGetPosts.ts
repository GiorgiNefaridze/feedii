import { endpoint } from "./useCreate";
import { axiosInstance } from "../api/baseURL";
import { PostContext } from "../context/postContext";

export const useGetPosts = () => {
  const { setPosts } = PostContext();

  const getPosts = async () => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).get(endpoint);

      setPosts(response);
    } catch (error) {}
  };

  return { getPosts };
};
