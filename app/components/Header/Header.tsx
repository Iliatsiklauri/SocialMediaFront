import React from 'react';
import LogOutButton from './LogOutButton/LogOutButton';

export default function Header() {
  return (
    <div className="h-[80px] w-full bg-slate-500 absolute top-0 flex items-center justify-between px-12">
      <h1 className="text-2xl text-white">Welcome</h1>
      <LogOutButton />
    </div>
  );
}
