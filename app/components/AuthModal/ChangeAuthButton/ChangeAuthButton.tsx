import { changeAuthButton } from '@/app/types/authentication/auth.types';
import React from 'react';

export default function ChangeAuthButton({ auth, setAuth }: changeAuthButton) {
  return (
    <div className="w-[90%] h-[50px] flex items-center justify-around cursor-pointer absolute top-10">
      <div className="flex w-full h-full items-center justify-around relative">
        <div
          className={`${
            auth ? '' : ''
          } w-1/3 h-full flex items-center justify-center z-10`}
          onClick={() => setAuth(true)}
        >
          Login
        </div>
        <div
          className={`w-1/2 h-full absolute bg-slate-200 z-0 rounded-xl transition-transform duration-300 left-0 ease-in-out ${
            auth ? 'translate-x-0' : 'translate-x-[98%]'
          }`}
        ></div>
        <div
          className={`${
            auth ? '' : ''
          } w-1/3 h-full flex items-center justify-center z-10 cursor-pointer`}
          onClick={() => setAuth(false)}
        >
          Register
        </div>
      </div>
    </div>
  );
}
