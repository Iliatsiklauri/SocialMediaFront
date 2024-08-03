import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';

export default function SinglePost(post: post) {
  return (
    <div className="flex flex-col  bg-slate-200 w-full rounded-md overflow-hidden gap-5">
      <div className="flex items-center justify-start gap-5 pt-3 pl-3">
        <div className="w-[30px] h-[30px]">
          <ProfilePicture />
        </div>
        <p>
          {post.author.name} {post.author.lastname}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-full ">
        {post?.imageUrl !== 'No Image' && (
          <div className="relative w-full h-[350px] md:h-[500px] rounded-md overflow-hidden flex-shrink-0">
            <Image src={post?.imageUrl} alt="post image" fill />
          </div>
        )}
        {post.content !== '' && <p className="p-5">{post.content}</p>}
      </div>
    </div>
  );
}
