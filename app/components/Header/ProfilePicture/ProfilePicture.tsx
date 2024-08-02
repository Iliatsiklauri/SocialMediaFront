'use client';

import { getUserInfo } from '@/app/api/users/users.api';
import { user } from '@/app/types/User/user.type';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfilePicture() {
  const [user, setUser] = useState<user | null>(null);
  useEffect(() => {
    async function getUser() {
      const user: user | null = await getUserInfo();
      setUser(user);
    }
    getUser();
  }, []);
  return (
    <div className="relative rounded-full w-[50px] h-[50px] overflow-hidden">
      {user?.profilePicture?.imageUrl &&
      user.profilePicture.imageUrl !== 'No Image' ? (
        <Image src={user.profilePicture.imageUrl} alt="Profile picture" fill />
      ) : (
        <Image src={'/user.png'} alt="Profile picture" fill />
      )}
    </div>
  );
}
