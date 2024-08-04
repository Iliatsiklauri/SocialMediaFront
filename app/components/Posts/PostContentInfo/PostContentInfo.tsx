'use client';
import { useGlobalContext } from '@/app/context/context';
import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
        <div className="relative w-full h-[350px] md:h-[500px] rounded-md overflow-hidden flex-shrink-0">
          <Image src={post?.imageUrl} alt="post image" fill />
        </div>
      )}
      {post.content !== '' && <p className=" pt-2">{post.content}</p>}
      <PostInteraction
        user={user}
        post={post}
        setModal={setModal}
        setBackground={setBackground}
        fetchPosts={fetchPosts}
        setFetchPosts={setFetchPosts}
        setPostForComment={setPostForComment}
      />
      <p className="text-[14px]">liked by {post?.likes.length}</p>
    </div>
  );
}
