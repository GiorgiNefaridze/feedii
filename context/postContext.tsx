import { useContext, createContext, useState } from "react";

import { IProps, IPostContext } from "./Types";
import { IPost } from "../components/Post/Types";

const post = createContext<IPostContext>({} as IPostContext);

export const PostContext = () => {
  return useContext(post);
};

export const PostContextProvider = ({ children }: IProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  return <post.Provider value={{ posts, setPosts }}>{children}</post.Provider>;
};
