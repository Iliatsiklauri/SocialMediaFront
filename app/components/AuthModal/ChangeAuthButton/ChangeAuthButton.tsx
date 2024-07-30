import { changeAuthButton } from '@/app/types/authentication/auth.types';
import React from 'react';

export default function ChangeAuthButton({ auth, setAuth }: changeAuthButton) {
  return (
    <div className="w-full h-[50px] flex absolute top-10 px-8">
      <div className="flex w-full h-full items-center justify-around relative bg-slate-200 rounded-2xl">
        <div
          className={`${
            auth ? 'text-white' : 'text-black'
          } w-1/3 h-full flex items-center justify-center z-10 transition-all duration-200 cursor-pointer`}
          onClick={() => setAuth(true)}
        >
          Login
        </div>
        <div
          className={`w-1/2 h-full absolute bg-blue-600 z-0 rounded-2xl transition-transform duration-200 left-0 ease-in-out ${
            auth ? 'translate-x-0' : 'translate-x-[100%]'
          }`}
        ></div>
        <div
          className={`${
            !auth ? 'text-white' : 'text-black'
          } w-1/3 h-full flex items-center justify-center z-10 cursor-pointer transition-all duration-200`}
          onClick={() => setAuth(false)}
        >
          Register
        </div>
      </div>
    </div>
  );
}
