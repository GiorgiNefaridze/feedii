import { useState } from "react";

import { axiosInstance } from "../api/baseURL";

const endpoint = "/api/post/bookmark";

export const useGetBookmarks = () => {
  const [posts, setPosts] = useState([]);

  const getBookmarks = async (post_id: number) => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).get(endpoint + `/${post_id}`);

      setPosts(response);
    } catch (error) {
      console.error(error.response.data?.response);
    }
  };

  return { getBookmarks, posts, setPosts };
};
