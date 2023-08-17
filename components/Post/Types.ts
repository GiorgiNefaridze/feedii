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
}

export interface IPostHeader {
  fullName: string;
  date: string;
}

export interface IPostFooter {
  cover: string;
  fullName: string;
  likes: number;
  comments: number;
  content: string;
  post_id: number;
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
