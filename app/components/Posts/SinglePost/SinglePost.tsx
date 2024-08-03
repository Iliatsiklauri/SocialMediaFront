import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';
import PostUserInfo from '../PostUserInfo/PostUserInfo';
import PostContentInfo from '../PostContentInfo/PostContentInfo';

export default function SinglePost(post: post) {
  return (
    <div className="flex flex-col  bg-slate-200 w-full rounded-md overflow-hidden gap-5">
      <PostUserInfo post={post} />
      <PostContentInfo post={post} />
    </div>
  );
}
