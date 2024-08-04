import { useGlobalContext } from '@/app/context/context';
import { post } from '@/app/types/posts/posts.type';
import React, { ReactNode } from 'react';

export default function Blacked({
  children,
  setPostForComment,
}: {
  children: ReactNode | undefined;
  setPostForComment: React.Dispatch<React.SetStateAction<post | null>>;
}) {
  const context = useGlobalContext();
  if (!context) return null;
  const { background, setBackground, setModal } = context;
  return (
    <div className="h-full w-full ">
      {background ? (
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <div
            className="w-full h-full z-40 absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"
            onClick={() => {
              setBackground(!background);
              setPostForComment(null);
              setModal('');
            }}
          ></div>
          <div className="flex items-center justify-center z-50">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}
