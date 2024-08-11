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
  const { background, setBackground, setModal, modal } = context;
  return (
    <div className="h-full w-full">
      {background ? (
        <div
          className={`absolute w-full h-full flex items-center justify-center`}
        >
          <div
            className={`w-full h-full absolute left-0 right-0 z-20 bottom-0 bg-black opacity-30`}
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
