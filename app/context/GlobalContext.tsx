'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { getUserInfo } from '../api/users/users.api';
import { user } from '../types/User/user.type';
import { GlobalProvider } from './context';
import { post } from '../types/posts/posts.type';
import { getPostsApi } from '../api/posts/posts.api';
import { boolean } from 'yup';

export default function GlobalContext({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<user | null>(null);
  const [posts, setPosts] = useState<post[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const user: user | null = await getUserInfo();
      const posts = await getPostsApi();
      setPosts(posts.reverse());
      setUser(user);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <GlobalProvider.Provider value={{ user, posts, loading }}>
      {children}
    </GlobalProvider.Provider>
  );
}
