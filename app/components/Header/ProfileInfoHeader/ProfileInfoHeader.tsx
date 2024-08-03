'use client';
import React, { useState } from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { useGlobalContext } from '@/app/context/context';
import ProfileArrow from '@/app/assets/ProfileArrow/ProfileArrow';

export default function ProfileInfoHeader() {
  const [side, setSide] = useState(true);
  const context = useGlobalContext();
  if (!context) return null;
  const { user, loading } = context;
  return (
    <div className="flex items-center justify-center gap-3 relative">
      <div className="w-[50px] h-[50px]">
        <ProfilePicture />
      </div>
      <div
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => {
          setSide(!side);
        }}
      >
        <p className={`${loading ? 'opacity-0' : ''}`}>
          {loading ? 'user user' : `${user?.name} ${user?.lastname}`}
        </p>
        <ProfileArrow side={side} />
      </div>
    </div>
  );
}
