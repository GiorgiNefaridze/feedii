import { useState } from "react";
import { isAxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { axiosInstance } from "../api/baseURL";

interface IData {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  secret?: string;
}

export const useAuth = (endpoint: string) => {
  const [result, setResult] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const auth = async (data: IData) => {
    try {
      const { data: res } = await axiosInstance().post(endpoint, data);
      const response = res?.response;

      await AsyncStorage.setItem("token", response);

      setResult(response);
    } catch (error) {
      if (isAxiosError(error)) {
        setErr(error?.response?.data?.response);
      }
    }
  };

  return { auth, setResult, result, setErr, err };
};
