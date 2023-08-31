import { useState } from "react";

import { axiosInstance } from "../api/baseURL";
import { IComment } from "../components/Comments/Types";

const endpoint = "/api/post/comments";

export const useGetComments = () => {
  const [result, setResult] = useState<IComment[]>([]);

  const getComments = async (post_id: number) => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).get(`${endpoint + "/" + post_id}`);

      setResult(response);
    } catch (error) {
      console.error(error.response.data.response);
    }
  };

  return { getComments, result };
};
