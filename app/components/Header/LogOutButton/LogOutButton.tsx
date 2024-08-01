import Link from 'next/link';
import React from 'react';

export default function LogOutButton() {
  return (
    <Link href={'/auth'} className="cursor-pointer bg-red-500 p-4 rounded-xl">
      Log Out
    </Link>
  );
}
