import React from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';
import { post } from '@/app/types/posts/posts.type';
import { formatDate } from '@/app/utils/auth.utils';
import Link from 'next/link';

export default function PostUserInfo({ post }: { post: post }) {
  const date = formatDate(post.createdAt);
  return (
    <div className="flex items-start justify-between gap-5 pt-3 px-3">
      <Link
        className="flex items-center justify-center gap-3 cursor-pointer"
        href={`/profile/${post.author._id}`}
      >
        <div className="w-[30px] h-[30px]">
          <ProfilePicture imageUrl={post.author.profilePicture.imageUrl} />
        </div>
        <p className="pt-1.5 hover:underline">
          {post.author.name} {post.author.lastname}
        </p>
      </Link>
      <p className="text-[12px] opacity-50 mt-2">{date}</p>
    </div>
  );
}
