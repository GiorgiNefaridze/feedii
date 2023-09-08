import { useState } from "react";
import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";
import { IData } from "./useIsLikedCkecker";

const endpoint = "/api/post/bookmark";

export const useBookmark = () => {
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");

  const bookmark = async (data: IData) => {
    try {
      const {
        data: { response },
      } = await (await axiosInstance()).post(endpoint, data);

      setResult(response);
    } catch (error) {
      if (isAxiosError(error)) {
        setErr(error.response.data?.response);
      }
    }
  };

  return { bookmark, result, setResult, err, setErr };
};
