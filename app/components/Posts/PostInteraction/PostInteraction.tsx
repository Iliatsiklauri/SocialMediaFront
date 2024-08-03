import { post } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React from 'react';

type PropType = {
  isLiked: boolean;
  handleLike(): Promise<any>;
  post: post;
  setModal: React.Dispatch<React.SetStateAction<'' | 'comment'>>;
  setBackground: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function PostInteraction({
  handleLike,
  isLiked,
  post,
  setBackground,
  setModal,
}: PropType) {
  const handleComment = () => {
    setModal('comment');
    setBackground(true);
  };
  return (
    <div className="w-full h-[50px] flex items-center justify-start gap-2">
      {isLiked ? (
        <Image
          src={'/heart (1).png'}
          alt="heart"
          width={20}
          height={20}
          onClick={handleLike}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src={'/heart.png'}
          alt="heart"
          width={20}
          height={20}
          onClick={handleLike}
          className="cursor-pointer"
        />
      )}
      <Image
        src={'/chat.png'}
        alt="chat"
        width={18}
        height={18}
        className="cursor-pointer"
        onClick={handleComment}
      />
    </div>
  );
}
