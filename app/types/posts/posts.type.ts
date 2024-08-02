import { createContext } from 'react';
import { user } from '../User/user.type';

export type post = {
  author: user;
  content: string;
  filePath: string;
  imageUrl: string;
  comments: string[];
  likes: string[];
};

export type getPostsType = {
  posts: post[] | [];
  setPosts: React.Dispatch<React.SetStateAction<[] | post[]>>;
};
