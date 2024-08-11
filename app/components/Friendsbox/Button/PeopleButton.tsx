import Image from 'next/image';
import React from 'react';

export default function PeopleButton({
  friendsBox,
  setFriendsBox,
}: {
  friendsBox: boolean;
  setFriendsBox: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="w-[50px] h-[50px] rounded-full absolute right-[-70px] top-5 bg-slate-100 cursor-pointer flex items-center justify-center pointer-events-auto"
      onClick={() => setFriendsBox(!friendsBox)}
    >
      <Image src={'/group.png'} width={20} height={20} alt="people" />
    </div>
  );
}
