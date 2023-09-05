import { useState } from "react";
import { isAxiosError } from "axios";

import { IUserData } from "../context/Types";
import { axiosInstance } from "../api/baseURL";

interface IData {
  user_id: number;
  firstName: string;
  lastName: string;
  secret: string;
}

const endpoint = "/api/post/update-profile";

export const useUpdateProfile = () => {
  const [result, setResult] = useState<IUserData>({} as IUserData);
  const [err, setErr] = useState<string>("");

  const updateProfile = async (data: IData) => {
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

  return { updateProfile, result, setResult, err, setErr };
};
