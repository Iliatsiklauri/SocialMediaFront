import { deletePost } from '@/app/api/posts/posts.api';
import { useGlobalContext } from '@/app/context/context';
import React from 'react';

export default function PostInfoModal({
  authorID,
  postId,
}: {
  authorID: string;
  postId: string;
}) {
  const context = useGlobalContext();
  if (!context) return null;
  const { user, fetchPosts, setFetchPosts } = context;

  async function handleDelete() {
    const res = await deletePost(postId);
    setFetchPosts(!fetchPosts);
  }
  let owner = user?._id === authorID;
  return (
    <div className="absolute w-[150px] h-fit bg-white shadow-md rounded-lg z-10 top-[-70px] left-[-110px] overflow-hidden">
      {owner && (
        <div className="w-full">
          <div
            className="w-full h-[30px] flex items-center justify-start px-3 hover:bg-black hover:bg-opacity-20 cursor-pointer"
            onClick={handleDelete}
          >
            delete
          </div>
          <div className="w-full h-[30px] flex items-center justify-start px-3 hover:bg-black hover:bg-opacity-20 cursor-pointer">
            edit
          </div>
        </div>
      )}
    </div>
  );
}
