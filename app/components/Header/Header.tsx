import React from 'react';
import ProfileInfoHeader from './ProfileInfoHeader/ProfileInfoHeader';
import SearchBar from './SearchBar/SearchBar';

export default function Header() {
  return (
    <div className="h-[80px] w-full bg-white fixed top-0 flex items-center justify-between px-4 sm:px-[5%] lg:px-12 xl:px-[5%] 2xl:px-[8%] z-20 shadow-sm pointer-events-none ">
      <SearchBar />
      <ProfileInfoHeader />
    </div>
  );
}
