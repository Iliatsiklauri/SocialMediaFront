import { user } from '@/app/types/User/user.type';
import Image from 'next/image';
import React from 'react';

export default function UserBox({ user }: { user: user }) {
  return (
    <div className="w-full flex gap-3 items-center justify-start">
      <Image
        src={
          user.profilePicture.imageUrl === 'No Image'
            ? '/user.png'
            : `${user.profilePicture.imageUrl}`
        }
        alt="profile picture"
        width={30}
        height={30}
      />
      <div className="flex items-center justify-center gap-2 text-[14px]">
        <p>{user.name}</p>
        <p>{user.lastname}</p>
      </div>
    </div>
  );
}
