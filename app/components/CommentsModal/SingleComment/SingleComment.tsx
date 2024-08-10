import { Comment } from '@/app/types/posts/posts.type';
import React from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';
import Image from 'next/image';
import { deleteComment } from '@/app/api/posts/posts.api';
import { useGlobalContext } from '@/app/context/context';

export default function SingleComment({
  comment,
  comments,
}: {
  comment: Comment;
  comments: Comment[];
}) {
  const context = useGlobalContext();
  if (!context) return null;
  const { setFetchPosts, fetchPosts, user } = context;
  async function removeComment() {
    let index = comments.findIndex((el) => el._id == comment._id);
    comments.splice(index, 1);
    const res = await deleteComment(comment._id);
    setFetchPosts(!fetchPosts);
  }
  return (
    <div className="w-full flex items-start text-white justify-center flex-col gap-2">
      <div className="w-full flex justify-between items-center bg-slate-500">
        <div className="w-full flex items-center justify-start gap-2">
          <div className="relative w-[30px] h-[30px]">
            <ProfilePicture imageUrl={comment.author.profilePicture.imageUrl} />
          </div>
          <p>
            {comment.author.name}
            {comment.author.lastname}
          </p>
        </div>
        {user?._id === comment.author._id && (
          <Image
            alt="delete comment"
            src={'/trash-can.png'}
            width={20}
            height={5}
            onClick={removeComment}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="w-full overflow-wrap break-words whitespace-pre-wrap">
        {comment.content}
      </div>
    </div>
  );
}
