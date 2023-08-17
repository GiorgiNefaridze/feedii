import { useState } from "react";
import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";

export const endpoint: string = "/api/post";

interface IPost {
  owner_id: number;
  content: string;
  date: string;
  cover?: string;
}

export const useCreate = () => {
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const createPost = async (data: IPost) => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).post(endpoint, data);

      setResult(response);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response.data?.response);
      }
    }
  };

  return { createPost, error, setError, result, setResult };
};
