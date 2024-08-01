import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React from 'react';

export default function SinglePost(post: post) {
  return (
    <div className="flex flex-col gap-4 bg-slate-200 w-full">
      <p>
        {post.author.name} {post.author.lastname}
      </p>
      <div className="relative w-auto h-[500px]">
        <Image src={post?.filePath} alt="post image" fill />
      </div>
    </div>
  );
}
