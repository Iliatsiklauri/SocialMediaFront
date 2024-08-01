import { post } from '@/app/types/posts/posts.type';
import React from 'react';

export default function SinglePost(post: post) {
  return (
    <div className="flex flex-col gap-4 bg-slate-200">
      <p>
        {post.author.name} {post.author.lastname}
      </p>
      <img src={`${post?.imageUrl}`} />
    </div>
  );
}
