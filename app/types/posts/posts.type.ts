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

export type PostInteractionType = {
  user: user | null;
  post: post;
  setModal: React.Dispatch<React.SetStateAction<'' | 'comment'>>;
  setBackground: React.Dispatch<React.SetStateAction<boolean>>;
  setFetchPosts: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPosts: boolean;
};
