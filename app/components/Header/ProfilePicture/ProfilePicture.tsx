import { useGlobalContext } from '@/app/context/context';
import Image from 'next/image';

export default function ProfilePicture({ imageUrl }: { imageUrl?: string }) {
  const context = useGlobalContext();
  if (!context) return null;
  const { user } = context;

  const getImageSrc = () => {
    if (imageUrl && imageUrl !== 'No Image') return imageUrl;
    if (imageUrl && imageUrl === 'No Image') return '/user.png';
    if (
      user?.profilePicture?.imageUrl &&
      user.profilePicture.imageUrl !== 'No Image'
    )
      return user.profilePicture.imageUrl;

    return '/user.png';
  };

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <Image
        src={getImageSrc()}
        alt="Profile picture"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
