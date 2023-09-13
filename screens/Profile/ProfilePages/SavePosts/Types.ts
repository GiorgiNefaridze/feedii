import { NavigationProp } from "@react-navigation/native";

export interface IPost {
  post_id: number;
  owner_id: number;
  content: string;
  cover: string;
  date: string;
  firstname: string;
  lastname: string;
  id: number;
}

export interface ISavePosts {
  navigation: NavigationProp<any>;
}
