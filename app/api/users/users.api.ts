import { user } from '@/app/types/User/user.type';
import { getCookie } from 'cookies-next';

export async function getUserId(): Promise<null | string> {
  const API = 'http://localhost:4000/auth/current-user';
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: cookie,
    },
  });
  const ID = await res.json();
  return ID.id;
}

export async function getUserInfo(): Promise<user | null> {
  const id = await getUserId();
  const API = `http://localhost:4000/users/${id}`;
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: cookie,
    },
  });
  const user = await res.json();
  return user;
}

export async function getUsers() {
  const API = `http://localhost:4000/users`;
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: cookie,
    },
  });
  return res.json();
}
