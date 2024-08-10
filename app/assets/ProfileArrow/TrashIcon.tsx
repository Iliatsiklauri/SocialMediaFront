import Image from 'next/image';
import React from 'react';

export default function TrashIcon() {
  return (
    <Image
      src="/trash-can.png"
      alt="choose photo"
      width={20}
      height={20}
      className=""
    />
  );
}
