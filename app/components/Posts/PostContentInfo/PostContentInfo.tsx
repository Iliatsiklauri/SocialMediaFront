'use client';
import { useGlobalContext } from '@/app/context/context';
import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React from 'react';
import PostInteraction from '../PostInteraction/PostInteraction';

export default function PostContentInfo({ post }: { post: post }) {
  const context = useGlobalContext();
  if (!context) return null;
  const {
    user,
    setModal,
    setBackground,
    setFetchPosts,
    fetchPosts,
    setPostForComment,
  } = context;
  return (
    <div className="flex flex-col items-start justify-center w-full px-2">
      {post?.imageUrl !== 'No Image' && (
        <div className="relative w-full aspect-square rounded-md overflow-hidden flex-shrink-0">
          <Image src={post?.imageUrl} alt="post image" fill />
        </div>
      )}
      {post.content !== '' && (
        <p
          className={` text-[14px] md:text-[16px] ${
            post?.imageUrl !== 'No Image' ? 'pt-2 md:pt-4' : ''
          } leading-4 md:leading-5 md:tracking-normal tracking-normal `}
        >
          {post.content}
        </p>
      )}
      <PostInteraction
        user={user}
        post={post}
        setModal={setModal}
        setBackground={setBackground}
        fetchPosts={fetchPosts}
        setFetchPosts={setFetchPosts}
        setPostForComment={setPostForComment}
      />
      <div className="flex items-center justify-center gap-1 mt-[-10px]">
        <p className="text-[12px]">{post.likes.length !== 0 && 'liked By'}</p>
        {post.likes.length > 0 && (
          <p className="text-[11px]">
            {post.likes.length === 1
              ? `${post.likes[0].name} ${post.likes[0].lastname}`
              : `${post.likes[0].name} ${post.likes[0].lastname} and others`}
          </p>
        )}
      </div>
    </div>
  );
}
