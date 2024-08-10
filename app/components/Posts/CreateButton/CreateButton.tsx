import { createPost } from '@/app/types/posts/posts.type';
import React from 'react';

export default function CreateButton({
  postDTO,
  handleSubmit,
}: {
  postDTO: createPost | null;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      className={`flex items-center justify-center text-white h-[38px] rounded-[10px] w-full ${
        (postDTO?.content &&
          postDTO?.content?.length > 0 &&
          postDTO.content.trim().length > 0) ||
        postDTO?.file
          ? 'bg-blue-600 cursor-pointer'
          : 'bg-gray-500'
      } `}
      onClick={handleSubmit}
      disabled={
        (postDTO?.content &&
          postDTO?.content?.length > 0 &&
          postDTO.content.trim().length > 0) ||
        postDTO?.file
          ? false
          : true
      }
    >
      <p>Post</p>
    </button>
  );
}
