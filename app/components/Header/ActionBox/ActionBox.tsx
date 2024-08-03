import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';

type PropType = {
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
  side: boolean;
};
export default function ActionBox({ setSide, side }: PropType) {
  return (
    <div
      className={`absolute w-full flex flex-col items-start justify-between h-[200px] rounded-lg shadow-lg bg-white ${
        !side ? 'bottom-[-240px]' : 'hidden'
      }`}
    >
      {/* <MyProfile /> */}
      <LogOutButton type={'Home'} />
      <LogOutButton type={'Profile'} />
      <LogOutButton type={'Settings'} />
      <LogOutButton type={'Log out'} />
    </div>
  );
}
