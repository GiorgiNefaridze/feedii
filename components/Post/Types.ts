export interface IPost {
  id: number;
  firstname: string;
  lastname: string;
  date: Date;
  postOwnerImage: string;
  cover: string;
  likes: number;
  commment: number;
  postDescription: string;
  userImage: string;
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
