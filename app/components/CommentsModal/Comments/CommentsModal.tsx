import { Comment, post } from '@/app/types/posts/posts.type';
import React from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';

export default function CommentsModal({ post }: { post: post | null }) {
  console.log(post?.comments);
  return (
    <div className="w-[400px] py-20 text-black bg-white rounded-xl">
      {post?.comments && post?.comments?.length > 0 ? (
        <div>
          {post.comments.map((comment, key: number) => (
            <div
              key={key}
              className="w-full py-5 border-black border-2 flex items-start justify-center flex-col"
            >
              <div className="w-full flex items-center justify-start gap-2">
                <div className="relative w-[30px] h-[30px]">
                  <ProfilePicture
                    imageUrl={comment.author.profilePicture.imageUrl}
                  />
                </div>
                <p>
                  {comment.author.name}
                  {comment.author.lastname}
                </p>
              </div>
              <div className="w-full ">{comment.content}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>bad</div>
      )}
    </div>
  );
}
