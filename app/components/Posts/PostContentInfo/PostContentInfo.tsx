'use client';
import { likePost } from '@/app/api/posts/posts.api';
import { useGlobalContext } from '@/app/context/context';
import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PostInteraction from '../PostInteraction/PostInteraction';

export default function PostContentInfo({ post }: { post: post }) {
  const [isLiked, setLiked] = useState<any>();
  useEffect(() => {
    if (post.likes.some((el) => el._id === user?._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);
  const context = useGlobalContext();
  if (!context) return null;
  const { user, setModal, setBackground } = context;

  async function handleLike() {
    setLiked(!isLiked);
    return await likePost(post._id);
  }
  return (
    <div className="flex flex-col items-start justify-center w-full px-2">
      {post?.imageUrl !== 'No Image' && (
        <div className="relative w-full h-[350px] md:h-[500px] rounded-md overflow-hidden flex-shrink-0">
          <Image src={post?.imageUrl} alt="post image" fill />
        </div>
      )}
      {post.content !== '' && <p className=" pt-2">{post.content}</p>}
      <PostInteraction
        handleLike={handleLike}
        isLiked={isLiked}
        post={post}
        setModal={setModal}
        setBackground={setBackground}
      />
      <p className="text-[14px]">liked by {post.likes.length}</p>
    </div>
  );
}
