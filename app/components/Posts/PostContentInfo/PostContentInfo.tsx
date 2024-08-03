'use client';
import { likePost } from '@/app/api/posts/posts.api';
import { useGlobalContext } from '@/app/context/context';
import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
  const { user } = context;

  async function handleLike() {
    setLiked(!isLiked);
    return await likePost(post._id);
  }
  return (
    <div className="flex flex-col items-start justify-center w-full">
      {post?.imageUrl !== 'No Image' && (
        <div className="relative w-full h-[350px] md:h-[500px] rounded-md overflow-hidden flex-shrink-0">
          <Image src={post?.imageUrl} alt="post image" fill />
        </div>
      )}
      {post.content !== '' && <p className="px-3 pt-2">{post.content}</p>}
      <div className="w-full h-[50px] flex items-center justify-start px-3 cursor-pointer">
        {isLiked ? (
          <Image
            src={'/heart (1).png'}
            alt="heart"
            width={20}
            height={20}
            onClick={handleLike}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={'/heart.png'}
            alt="heart"
            width={20}
            height={20}
            onClick={handleLike}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
