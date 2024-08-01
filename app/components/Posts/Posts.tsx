'use client';
import { getPostsApi } from '@/app/api/posts/posts.api';
import { post } from '@/app/types/posts/posts.type';
import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost/SinglePost';

export default function Posts() {
  const [posts, setPosts] = useState<[] | post[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await getPostsApi();
      setPosts(response);
    }
    fetchPosts();
  }, []);
  return (
    //! should improve image optimization
    <div className="w-1/3 flex flex-col items-center justify-center gap-[50px]">
      {posts && posts.length > 0 ? (
        posts?.map((el, key) => (
          <SinglePost
            author={el.author}
            comments={el.comments}
            content={el.content}
            filePath={el.filePath}
            likes={el.likes}
            key={key}
          />
        ))
      ) : (
        <p>no posts</p>
      )}
    </div>
  );
}
