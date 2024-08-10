import React, { useState } from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';
import { post } from '@/app/types/posts/posts.type';
import { formatDate } from '@/app/utils/auth.utils';
import Link from 'next/link';
import Image from 'next/image';
import PostInfoModal from '../PostInfoModal/PostInfoModal';
import { useGlobalContext } from '@/app/context/context';

export default function PostUserInfo({ post }: { post: post }) {
  const [infoModal, setInfoModal] = useState(false);
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
        <p className="text-[10px] opacity-50 mt-2">{date}</p>
      </Link>
      <div className="relative">
        <Image
          src={'/more.png'}
          width={20}
          height={20}
          alt="more"
          className="cursor-pointer"
          onClick={() => setInfoModal(!infoModal)}
        />
        {infoModal && (
          <PostInfoModal
            authorID={`${post.author._id}`}
            postId={`${post._id}`}
          />
        )}
      </div>
    </div>
  );
}
