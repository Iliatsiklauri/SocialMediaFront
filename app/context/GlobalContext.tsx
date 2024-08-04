'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { getUserInfo } from '../api/users/users.api';
import { user } from '../types/User/user.type';
import { GlobalProvider } from './context';
import { post } from '../types/posts/posts.type';
import { getPostsApi } from '../api/posts/posts.api';
import Blacked from '../components/BlackBackground/Blacked';
import CommentsModal from '../components/CommentsModal/Comments/CommentsModal';

export default function GlobalContext({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<user | null>(null);
  const [posts, setPosts] = useState<post[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [fetchPosts, setFetchPosts] = useState(false);
  const [background, setBackground] = useState(false);
  const [modal, setModal] = useState<'comment' | ''>('');
  const [postForComment, setPostForComment] = useState<post | null>(null);

  useEffect(() => {
    async function getData() {
      const user = await getUserInfo();
      const posts = await getPostsApi();
      setPosts(posts);
      setUser(user);
      setLoading(false);
    }
    getData();
  }, [success]);

  useEffect(() => {
    async function refreshPosts() {
      const posts = await getPostsApi();
      setPosts(posts);
    }
    refreshPosts();
  }, [fetchPosts]);
  return (
    <GlobalProvider.Provider
      value={{
        setSuccess,
        success,
        user,
        posts,
        loading,
        background,
        setBackground,
        modal,
        setModal,
        fetchPosts,
        setFetchPosts,
        postForComment,
        setPostForComment,
      }}
    >
      <div className="relative">
        <Blacked setPostForComment={setPostForComment}>
          {modal === 'comment' && <CommentsModal post={postForComment} />}
        </Blacked>
        <div>{children}</div>
      </div>
    </GlobalProvider.Provider>
  );
}
