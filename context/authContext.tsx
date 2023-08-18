import { createContext, useContext, useState, useEffect } from "react";

import { axiosInstance } from "../api/baseURL";
import { IProps, IUserData, IAuthContext } from "./Types";

const endpoint = "/api/auth/get-user";

export const auth = createContext<IAuthContext>({} as IAuthContext);

export const getUser = async (fn: Function) => {
  try {
    const {
      data: { response },
    } = await (await axiosInstance()).get(endpoint);

    fn(response);
  } catch (error) {
    console.error(error.response.data?.response);
  }
};

export const AuthContext = () => {
  return useContext(auth);
};

export const AuthContextProvider = ({ children }: IProps) => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);

  useEffect(() => {
    getUser(setUserData);
  }, []);

  return (
    <auth.Provider value={{ userData, setUserData }}>{children}</auth.Provider>
  );
};
