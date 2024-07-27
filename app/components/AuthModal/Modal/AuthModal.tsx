'use client';
import React, { useState } from 'react';
import ChangeAuthButton from '../ChangeAuthButton/ChangeAuthButton';
import SignInInputs from '../SignInInputs/SignInInputs';
import SignUpInputs from '../SignUpInputs/SignUpInputs';

export default function AuthModal() {
  const [auth, setAuth] = useState(false);
  return (
    <div
      className={`w-[400px] ${
        auth ? 'h-[380px]' : 'h-[530px]'
      } bg-slate-600 rounded-2xl border-2 border-black p-10 py-32 flex items-start justify-center relative transition-all duration-300 left-0 ease-in-out `}
    >
      <ChangeAuthButton auth={auth} setAuth={setAuth} />
      {auth ? <SignInInputs /> : <SignUpInputs />}
    </div>
  );
}
