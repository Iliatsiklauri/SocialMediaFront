import React, { useState } from 'react';
import ProfilePicture from '../../Header/ProfilePicture/ProfilePicture';
import { user } from '@/app/types/User/user.type';
import Image from 'next/image';

export default function CreatePost({ user }: { user: user | null }) {
  const [text, setText] = useState<string>('');
  return (
    <form className="w-full min-h-[240px] bg-white p-6 flex flex-col items-center justify-center gap-6">
      <div className="py-6 w-full flex items-center justify-start gap-6 ">
        <div className="w-[68px] h-[68px] flex-shrink-0">
          <ProfilePicture />
        </div>
        <textarea
          className="w-full h-[60px] focus:outline-none px-4 text-[14px] resize-none py-4"
          placeholder={`What's on your mind ${user?.name} ?`}
          rows={4}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="h-[20px] w-[30px] cursor-pointer relative mr-10">
          <Image fill src={'/gallery.png'} alt="choose photo" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-black opacity-10"></div>
      <div
        className={`flex items-center justify-center text-white h-[38px] rounded-[10px] w-full ${
          text?.length > 0 ? 'bg-blue-600 cursor-pointer' : 'bg-gray-500'
        } `}
      >
        <p>Post</p>
      </div>
    </form>
  );
}
