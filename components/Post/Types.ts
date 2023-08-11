export interface IPost {
  id: number;
  firstname: string;
  lastname: string;
  postOwnerImage: string;
  cover: string;
  date: string;
  postDescription: string;
  userImage: string;
  likes: number;
  commment: number;
}

export interface IWrapper {
  width: number;
}

export interface IHeader {
  paddingHorizontal: number;
}

export interface IFooter {
  width: number;
  paddingHorizontal: number;
}
