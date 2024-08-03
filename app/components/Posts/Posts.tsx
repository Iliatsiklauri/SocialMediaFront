'use client';
import React from 'react';
import SinglePost from './SinglePost/SinglePost';
import { useGlobalContext } from '@/app/context/context';

export default function Posts() {
  const context = useGlobalContext();
  if (!context) return null;
  const { posts, loading } = context;
  if (loading) {
    return <div className="spinner"></div>;
  }
  return (
    <div className="w-[360px] md:min-w-[400px] md:w-1/3 flex flex-col items-center justify-center gap-[50px] z-10">
      {posts && posts.length > 0 ? (
        posts?.map((el, key) => (
          <SinglePost
            author={el.author}
            comments={el.comments}
            content={el.content}
            imageUrl={el.imageUrl}
            filePath={el.filePath}
            likes={el.likes}
            key={key}
            createdAt={el.createdAt}
            _id={el._id}
          />
        ))
      ) : (
        <p>no posts</p>
      )}
    </div>
  );
}
