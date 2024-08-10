'use client';
import React, { useState } from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { useGlobalContext } from '@/app/context/context';
import ProfileArrow from '@/app/assets/ProfileArrow/ProfileArrow';
import ActionBox from '../ActionBox/ActionBox';

export default function ProfileInfoHeader() {
  const [side, setSide] = useState(true);
  const context = useGlobalContext();
  if (!context) return null;
  const { user, loading } = context;
  return (
    <div className="flex items-center justify-end gap-3 relative w-[130px] md:w-[180px] pointer-events-auto">
      <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] absolute left-0">
        <ProfilePicture />
      </div>
      <div
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => {
          setSide(!side);
        }}
      >
        <p
          className={`${loading ? 'opacity-0' : ''} text-[14px] lg:text-[16px]`}
        >
          {loading ? 'user user' : `${user?.name} ${user?.lastname}`}
        </p>
        <ProfileArrow side={side} />
      </div>
      <ActionBox side={side} setSide={setSide} />
    </div>
  );
}
