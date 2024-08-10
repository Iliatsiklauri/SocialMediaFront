import { post } from '@/app/types/posts/posts.type';
import React, { useState } from 'react';
import SingleComment from '../SingleComment/SingleComment';
import { postComment } from '@/app/api/posts/posts.api';
import { useGlobalContext } from '@/app/context/context';

export default function CommentsModal({ post }: { post: post | null }) {
  const [content, setContent] = useState<string>('');
  const context = useGlobalContext();
  if (!context) return null;
  const { setFetchPosts, fetchPosts, user } = context;

  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postComment(post?._id, content);
    console.log(res);
    post?.comments.push({
      content,
      author: user,
    } as any);
    setContent('');
    setFetchPosts(!fetchPosts);
  };
  return (
    <form
      className="w-[400px] pt-4 pb-2 text-black bg-[#36393B] rounded-xl px-2"
      onSubmit={handleComment}
    >
      {post?.comments && post?.comments?.length > 0 ? (
        <div className="flex items-start flex-col justify-center w-full gap-4">
          <div className="gap-2 flex flex-col items-center justify-center w-full">
            {post.comments.map((comment, key: number) => (
              <SingleComment
                comment={comment}
                comments={post.comments}
                key={key}
              />
            ))}
          </div>
          <input
            type="text"
            className="w-full h-8 border-black bg-white rounded-lg mt-2 focus:outline-none text-[14px] px-3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center gap-4">
          <p>Be First to comment</p>
          <input
            type="text"
            className="w-full h-8 border-black bg-white rounded-lg mt-2 focus:outline-none text-[14px] px-3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      )}
    </form>
  );
}
