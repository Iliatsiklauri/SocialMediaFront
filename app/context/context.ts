import { createContext, useContext } from 'react';
import { user } from '../types/User/user.type';
import { post } from '../types/posts/posts.type';

export type ProviderType = {
  user: user | null;
  posts: post[] | [];
  loading: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
};
export const GlobalProvider = createContext<ProviderType | null>(null);

export function useGlobalContext() {
  return useContext(GlobalProvider);
}
