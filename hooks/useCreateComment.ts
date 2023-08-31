import { useState } from "react";
import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";

const endpoint = "/api/post/comment";

interface IComment {
  owner_id: number;
  post_id: number;
  comment: string;
}

export const useCreateComment = () => {
  const [result, setResult] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const createComment = async (data: IComment) => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).post(endpoint, data);

      setResult(response);
    } catch (error) {
      if (isAxiosError(error)) {
        setErr(error.response?.data.response);
      }
    }
  };

  return { createComment, result, setResult, err, setErr };
};
