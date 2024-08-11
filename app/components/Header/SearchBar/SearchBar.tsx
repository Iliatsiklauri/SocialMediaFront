'use client';
import { getUsers } from '@/app/api/users/users.api';
import { useGlobalContext } from '@/app/context/context';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function SearchBar() {
  useEffect(() => {
    async function getData() {
      const users = await getUsers();
      console.log(users);
    }
    getData();
  });
  const context = useGlobalContext();
  if (!context) return null;
  const { background, setBackground, setModal } = context;
  return (
    <div className="flex items-center justify-center w-1/4 left-[20%] gap-4 to-zinc-50 pointer-events-auto">
      <Image
        src={'/search-interface-symbol.png'}
        height={20}
        width={20}
        alt="search bar"
      />
      <input
        type="text"
        className="w-full h-[40px] rounded-xl right-1/2  z-10 border-2 px-3"
        placeholder="Search for people"
        onClick={() => {
          setBackground(true);
          setModal('search');
        }}
      />
    </div>
  );
}
