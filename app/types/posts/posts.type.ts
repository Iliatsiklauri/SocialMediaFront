import { createContext } from 'react';
import { user } from '../User/user.type';

export type post = {
  _id: string;
  author: user;
  content: string;
  filePath: string;
  imageUrl: string;
  comments: string[];
  likes: {
    _id: string;
    name: string;
  }[];
  createdAt: string;
};

export type getPostsType = {
  posts: post[] | [];
  setPosts: React.Dispatch<React.SetStateAction<[] | post[]>>;
};
