'use client';
import { useGlobalContext } from '@/app/context/context';
import Image from 'next/image';

export default function ProfilePicture() {
  const context = useGlobalContext();
  if (!context) return null;
  const { user } = context;

  return (
    <div className="relative rounded-full w-full h-full overflow-hidden">
      {user?.profilePicture?.imageUrl &&
      user.profilePicture.imageUrl !== 'No Image' ? (
        <Image src={user.profilePicture.imageUrl} alt="Profile picture" fill />
      ) : (
        <Image src={'/user.png'} alt="Profile picture" fill />
      )}
    </div>
  );
}
