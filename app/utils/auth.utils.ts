import { hasCookie } from 'cookies-next';
import { redirect } from 'next/navigation';
import { getPostsApi } from '../api/posts/posts.api';
import { getPostsType } from '../types/posts/posts.type';

export const inputs = [
  'email',
  'password',
  'confirm_password',
  'name',
  'lastname',
];
