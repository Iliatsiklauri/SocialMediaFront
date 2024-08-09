import { createPost } from '@/app/types/posts/posts.type';
import React from 'react';

export default function CreateButton({
  postDTO,
  handleSubmit,
}: {
  postDTO: createPost | null;
  handleSubmit: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-center text-white h-[38px] rounded-[10px] w-full ${
        postDTO?.content || postDTO?.file
          ? 'bg-blue-600 cursor-pointer'
          : 'bg-gray-500'
      } `}
      onClick={handleSubmit}
    >
      <p>Post</p>
    </div>
  );
}
