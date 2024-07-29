import { changeAuthButton } from '@/app/types/authentication/auth.types';
import React from 'react';

export default function SubmitButton({ auth, setAuth }: changeAuthButton) {
  return (
    <button className="w-full h-[50px] bg-[#0766ff] rounded-md mt-5 text-white font-semibold text-lg flex-shrink-0 hover:bg-[#0779ff]">
      {auth ? 'Log In' : 'Sign Up'}
    </button>
  );
}
