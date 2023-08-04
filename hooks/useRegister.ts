import { useState } from "react";
import { isAxiosError } from "axios";

import { axiosInstance } from "../api/baseURL";

interface IData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  secret: string;
}

export const useRegister = () => {
  const [result, setResult] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const register = async (data: IData) => {
    try {
      const { data: res } = await axiosInstance().post(
        "/api/auth/sign-up",
        data
      );

      setResult(res?.response);
    } catch (error) {
      if (isAxiosError(error)) {
        setErr(error?.response?.data?.response);
      }
    }
  };

  return { register, setResult, result, setErr, err };
};
