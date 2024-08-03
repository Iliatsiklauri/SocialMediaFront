import Image from 'next/image';
import React from 'react';

export default function ProfileArrow({ side }: { side: boolean }) {
  return (
    <div
      className={`${
        side ? 'rotate-180' : 'rotate-0'
      } transition-all duration-200 ease-in-out`}
    >
      <Image alt="arrow" src={'/upload.png'} width={20} height={20} />
    </div>
  );
}
