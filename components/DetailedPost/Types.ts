import { IPost } from "../Post/Types";

export interface IProps {
  route: {
    params: {
      data: IPost;
    };
  };
  navigation: unknown;
}
