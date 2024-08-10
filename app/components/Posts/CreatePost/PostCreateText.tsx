import { createPost } from '@/app/types/posts/posts.type';
import { user } from '@/app/types/User/user.type';
import React from 'react';

export default function PostCreateText({
  handleContentChange,
  postDTO,
  user,
}: {
  user: user | null;
  postDTO: createPost | null;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <textarea
      className="w-full h-[60px] focus:outline-none px-4 md:text-[14px] resize-none py-4 placeholder:text-[12px] md:placeholder:text-[15px]"
      placeholder={`What's on your mind ${user?.name}?`}
      rows={4}
      onChange={handleContentChange}
      name="content"
      value={postDTO?.content || ''}
    ></textarea>
  );
}
