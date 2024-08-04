import { PostInteractionType } from '@/app/types/posts/posts.type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { likePost } from '@/app/api/posts/posts.api';

export default function PostInteraction({
  post,
  setBackground,
  setModal,
  fetchPosts,
  setFetchPosts,
  user,
}: PostInteractionType) {
  const [isLiked, setLiked] = useState<boolean>(false);
  useEffect(() => {
    console.log('clling');
    if (post.likes.some((el) => el._id === user?._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);

  const handleComment = () => {
    setModal('comment');
    setBackground(true);
  };
  const handleLike = async () => {
    setLiked(!isLiked);
    await likePost(post._id);
    setFetchPosts(!fetchPosts);
  };

  return (
    <div className="w-full h-[50px] flex items-center justify-start gap-2">
      <Image
        src={isLiked ? '/heart (1).png' : '/heart.png'}
        alt="heart"
        width={20}
        height={20}
        onClick={handleLike}
        className="cursor-pointer"
      />
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
