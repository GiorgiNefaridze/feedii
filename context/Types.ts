import { Dispatch, SetStateAction } from "react";

import { IPost } from "../components/Post/Types";

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

export interface IPostContext {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
}
