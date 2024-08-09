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
  setPostForComment,
}: PostInteractionType) {
  const [isLiked, setLiked] = useState<boolean>(false);
  useEffect(() => {
    if (post.likes.some((el) => el._id === user?._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);

  const handleComment = () => {
    setPostForComment(post);
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
        width={20}
        height={22}
        className="cursor-pointer"
        onClick={handleComment}
      />
    </div>
  );
}
