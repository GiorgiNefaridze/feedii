import { NavigationProp } from "@react-navigation/native";

export interface IPost {
  owner_id: number;
  post_id: number;
  firstname: string;
  lastname: string;
  cover: string;
  date: string;
  content: string;
  likes: number;
  comment: number;
  navigation: NavigationProp<any>;
  isLiked: boolean;
}

export interface IPostHeader {
  fullName: string;
  date: string;
}

export interface IPostFooter {
  likes: number;
  comments: number;
  post_id: number;
  navigation: NavigationProp<any>;
}

export interface IProps {
  [key: string]: number;
}

export interface IFooter {
  width: number;
  paddingHorizontal: number;
}
