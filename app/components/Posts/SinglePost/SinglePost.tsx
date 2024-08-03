import { post } from '@/app/types/posts/posts.type';
import React from 'react';
import PostUserInfo from '../PostUserInfo/PostUserInfo';
import PostContentInfo from '../PostContentInfo/PostContentInfo';

export default function SinglePost(post: post) {
  return (
    <div className="flex flex-col  bg-white w-full rounded-md overflow-hidden gap-5 bg-opacity-90 p-2 shadow-md">
      <PostUserInfo post={post} />
      <PostContentInfo post={post} />
    </div>
  );
}
