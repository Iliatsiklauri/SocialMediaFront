import React, { useRef, useState } from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';
import { user } from '@/app/types/User/user.type';
import Image from 'next/image';
import { createPost } from '@/app/types/posts/posts.type';
import CreateButton from '../CreateButton/CreateButton';
import PostCreateText from './PostCreateText';
import ShowSelectedPic from './ShowSelectedPic';
import { uploadPost } from '@/app/api/posts/posts.api';
import { useGlobalContext } from '@/app/context/context';

export default function CreatePost({ user }: { user: user | null }) {
  const [postDTO, setPostDto] = useState<createPost | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const context = useGlobalContext();
  if (!context) return null;
  const { fetchPosts, setFetchPosts } = context;

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostDto({
      ...postDTO,
      content: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostDto({
        ...postDTO,
        file,
      });
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (postDTO?.content === '' && postDTO?.content?.trim().length === 0) {
      setPostDto({
        file: postDTO.file,
      });
    }
    if (postDTO?.file) {
      URL.revokeObjectURL(postDTO.file.name);
    }
    if (postDTO) {
      const response = await uploadPost(postDTO);
    }
    setFetchPosts(!fetchPosts);
    setPostDto(null);
  };
  return (
    <form className="w-full min-h-[180px] md:min-h-[240px] bg-white px-3 md:p-6 flex flex-col items-center justify-center md:gap-6 relative overflow-hidden">
      <div className="py-6 w-full flex items-center justify-start gap-3 lg:gap-6">
        <div className="w-[50px] h-[50px] md:w-[68px] md:h-[68px] flex-shrink-0">
          <ProfilePicture />
        </div>
        <PostCreateText
          handleContentChange={handleContentChange}
          postDTO={postDTO}
          user={user}
        />
        <div
          className="h-[20px] w-[30px] cursor-pointer relative md:mr-10"
          onClick={() => fileInputRef.current?.click()}
        >
          <Image fill src="/gallery.png" alt="choose photo" />
        </div>
        <ShowSelectedPic postDTO={postDTO} setPostDto={setPostDto} />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          name="file"
          accept="image/*"
        />
      </div>
      <div className="h-[1px] w-full bg-black opacity-10 hidden md:block"></div>
      <CreateButton handleSubmit={handleSubmit} postDTO={postDTO} />
    </form>
  );
}
