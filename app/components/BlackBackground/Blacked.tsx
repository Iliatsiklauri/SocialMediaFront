import { useGlobalContext } from '@/app/context/context';
import React, { ReactNode } from 'react';

export default function Blacked({
  children,
}: {
  children: ReactNode | undefined;
}) {
  const context = useGlobalContext();
  if (!context) return null;
  const { background, setBackground } = context;
  return (
    <div className="h-full w-full">
      {background ? (
        <div className="">
          <div
            className="w-full h-full z-50 absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"
            onClick={() => setBackground(!background)}
          ></div>
          <div className="w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}
