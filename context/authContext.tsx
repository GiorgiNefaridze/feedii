import { createContext, useContext, useState, useEffect } from "react";

import { axiosInstance } from "../api/baseURL";
import { IProps, IUserData, IAuthContext } from "./Types";

export const auth = createContext<IAuthContext>({} as IAuthContext);
const endpoint = "/api/auth/get-user";

export const AuthContext = () => {
  return useContext(auth);
};

export const AuthContextProvider = ({ children }: IProps) => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { response },
        } = await (await axiosInstance()).get(endpoint);

        setUserData(response);
      } catch (error) {
        console.error(error.response.data?.response);
      }
    })();
  }, []);

  return (
    <auth.Provider value={{ userData, setUserData }}>{children}</auth.Provider>
  );
};
