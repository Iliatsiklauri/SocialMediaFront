import { createContext, useContext } from 'react';
import { user } from '../types/User/user.type';
import { post } from '../types/posts/posts.type';

export type ProviderType = {
  user: user | null;
  posts: post[] | [];
  loading: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
  setBackground: React.Dispatch<React.SetStateAction<boolean>>;
  background: boolean;
  setModal: React.Dispatch<React.SetStateAction<'' | 'comment' | 'search'>>;
  modal: '' | 'comment' | 'search';
  setFetchPosts: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPosts: boolean;
  setPostForComment: React.Dispatch<React.SetStateAction<post | null>>;
  postForComment: post | null;
};
export const GlobalProvider = createContext<ProviderType | null>(null);

export function useGlobalContext() {
  return useContext(GlobalProvider);
}
