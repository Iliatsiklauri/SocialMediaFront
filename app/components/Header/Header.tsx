import React from 'react';
import ProfileInfoHeader from './ProfileInfoHeader/ProfileInfoHeader';

export default function Header() {
  return (
    <div className="h-[80px] w-full bg-white fixed top-0 flex items-center justify-between px-12 z-20 shadow-sm pointer-events-none">
      <h1 className="text-2xl text-lightGreen">Welcome</h1>
      <ProfileInfoHeader />
    </div>
  );
}
