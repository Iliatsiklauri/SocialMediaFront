import { useGlobalContext } from '@/app/context/context';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type propType = {
  type: 'Log out' | 'Settings' | 'Home' | 'Profile' | null;
};
export default function LogOutButton({ type }: propType) {
  const context = useGlobalContext();
  if (!context) return null;
  const { user } = context;
  return (
    <Link
      href={
        type == 'Home'
          ? '/'
          : type == 'Settings'
          ? '/settings'
          : type == 'Log out'
          ? '/auth'
          : type == 'Profile'
          ? `/profile/${user?._id}`
          : ''
      }
      className="cursor-pointer w-full h-[40px] flex items-center justify-between gap-2 px-3 hover:bg-gray-100 rounded-sm"
    >
      <p>{type}</p>
      <Image
        src={
          type == 'Home'
            ? '/house-black-silhouette-without-door.png'
            : type == 'Settings'
            ? '/gear.png'
            : type == 'Log out'
            ? '/log-out.png'
            : type == 'Profile'
            ? `/user (1).png`
            : ''
        }
        alt="Log out"
        width={20}
        height={20}
      />
    </Link>
  );
}
