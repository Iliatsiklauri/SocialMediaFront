import { post } from '@/app/types/posts/posts.type';
import React from 'react';
import PostUserInfo from '../PostUserInfo/PostUserInfo';
import PostContentInfo from '../PostContentInfo/PostContentInfo';
import { user } from '@/app/types/User/user.type';

export default function SinglePost({ post }: { post: post }) {
  return (
    <div className="flex flex-col  bg-white w-full rounded-md gap-5 bg-opacity-90 p-2 shadow-md">
      <PostUserInfo post={post} />
      <PostContentInfo post={post} />
    </div>
  );
}
