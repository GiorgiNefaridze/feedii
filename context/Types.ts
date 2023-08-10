import { Dispatch, SetStateAction } from "react";

export interface IProps {
  children: JSX.Element;
}

export interface IUserData {
  id: number;
  firstname: string;
  lastname: string;
}

export interface IAuthContext {
  userData: IUserData;
  setUserData: Dispatch<SetStateAction<IUserData>>;
}
