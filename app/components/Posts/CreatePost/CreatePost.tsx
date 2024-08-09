import React, { useEffect, useRef, useState } from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';
import { user } from '@/app/types/User/user.type';
import Image from 'next/image';
import { createPost } from '@/app/types/posts/posts.type';
import CreateButton from '../CreateButton/CreateButton';
import { NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER } from 'next/dist/lib/constants';

export default function CreatePost({ user }: { user: user | null }) {
  const [postDTO, setPostDto] = useState<createPost | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostDto({
      ...postDTO,
      content: e.target.value,
    });
    console.log(postDTO);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostDto({
        file,
        ...postDTO,
      });
    }
  };

  return (
    <form className="w-full min-h-[240px] bg-white p-6 flex flex-col items-center justify-center gap-6 relative">
      <div className="py-6 w-full flex items-center justify-start gap-6">
        <div className="w-[68px] h-[68px] flex-shrink-0">
          <ProfilePicture />
        </div>
        <textarea
          className="w-full h-[60px] focus:outline-none px-4 text-[14px] resize-none py-4"
          placeholder={`What's on your mind ${user?.name}?`}
          rows={4}
          onChange={handleContentChange}
          name="content"
          value={postDTO?.content || ''}
        ></textarea>
        <div
          className="h-[20px] w-[30px] cursor-pointer relative mr-10"
          onClick={() => fileInputRef.current?.click()}
        >
          <Image fill src="/gallery.png" alt="choose photo" />
        </div>
        <div className="absolute right-2 top-2 rounded-md overflow-hidden">
          {postDTO?.file && (
            <div className="relative w-14 h-14">
              <div className="absolute bg-white opacity-0 hover:opacity-45 w-full h-full cursor-pointer flex items-center justify-center">
                <Image
                  src="/trash-can.png"
                  alt="choose photo"
                  width={20}
                  height={20}
                  onClick={() => {}}
                />
              </div>
              <Image
                src={URL.createObjectURL(postDTO?.file)}
                alt="Selected"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          name="file"
          accept="image/*"
        />
      </div>
      <div className="h-[1px] w-full bg-black opacity-10"></div>
      <CreateButton
        handleSubmit={() => {
          console.log(postDTO);
          setPostDto(null);
        }}
        postDTO={postDTO}
      />
    </form>
  );
}
