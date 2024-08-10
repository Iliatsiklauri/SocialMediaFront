import { createContext } from 'react';
import { user } from '../User/user.type';

export type post = {
  _id: string;
  author: user;
  content: string;
  filePath: string;
  imageUrl: string;
  comments: Comment[];
  likes: {
    _id: string;
    lastname: string;
    name: string;
  }[];
  createdAt: string;
};

export type getPostsType = {
  posts: post[] | [];
  setPosts: React.Dispatch<React.SetStateAction<[] | post[]>>;
};

export type PostInteractionType = {
  setPostForComment: React.Dispatch<React.SetStateAction<post | null>>;
  user: user | null;
  post: post;
  setModal: React.Dispatch<React.SetStateAction<'' | 'comment'>>;
  setBackground: React.Dispatch<React.SetStateAction<boolean>>;
  setFetchPosts: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPosts: boolean;
};

export type Comment = {
  _id: string;
  author: user;
  content: string;
  likes: string;
  postId: string;
};

export type createPost = {
  content?: string;
  file?: File;
};
