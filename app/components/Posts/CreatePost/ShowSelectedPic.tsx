import TrashIcon from '@/app/assets/ProfileArrow/TrashIcon';
import { createPost } from '@/app/types/posts/posts.type';
import { Elsie_Swash_Caps } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

export default function ShowSelectedPic({
  postDTO,
  setPostDto,
}: {
  postDTO: createPost | null;
  setPostDto: React.Dispatch<React.SetStateAction<createPost | null>>;
}) {
  return (
    <div className={` flex absolute right-2 top-2 `}>
      {postDTO?.file && (
        <div className="relative w-14 h-14">
          <div
            onClick={() => {
              URL.revokeObjectURL(postDTO.file?.name || '');
              if (postDTO.content) {
                setPostDto({
                  content: postDTO?.content,
                });
              } else {
                setPostDto(null);
              }
            }}
            className="w-[20px] h-[20px] absolute top-[-5px] flex items-center justify-center right-[-5px] bg-red-700 z-10 text-white text-[11px] rounded-full cursor-pointer"
          >
            X
          </div>
          <Image
            src={URL.createObjectURL(postDTO?.file)}
            alt="Selected"
            fill
            className="w-full h-full object-cover overflow-hidden rounded-md"
          />
        </div>
      )}
    </div>
  );
}
