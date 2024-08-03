import React from 'react';
import LogOutButton from './LogOutButton/LogOutButton';
import ProfilePicture from './ProfilePicture/ProfilePicture';

export default function Header() {
  return (
    <div className="h-[80px] w-full bg-white fixed top-0 flex items-center justify-between px-12 z-20">
      <h1 className="text-2xl text-blue-300">Welcome</h1>
      <LogOutButton />
      <div className="w-[50px] h-[50px]">
        <ProfilePicture />
      </div>
    </div>
  );
}
