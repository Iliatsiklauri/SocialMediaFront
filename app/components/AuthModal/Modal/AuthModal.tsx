'use client';
import React, { useState } from 'react';
import ChangeAuthButton from '../ChangeAuthButton/ChangeAuthButton';
import SignInInputs from '../SignInInputs/SignInInputs';
import SignUpInputs from '../SignUpInputs/SignUpInputs';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function AuthModal() {
  const [auth, setAuth] = useState(false);
  return (
    <div
      className={`w-[400px] flex-shrink-0 ${
        auth ? 'h-[380px]' : 'h-[624px]'
      } bg-white rounded-2xl shadow-slate-400 shadow-sm p-8 pt-28
       flex items-center justify-start gap-6 relative transition-all duration-150 ease-in-out flex-col `}
    >
      <ChangeAuthButton auth={auth} setAuth={setAuth} />
      {auth ? (
        <SignInInputs auth={auth} setAuth={setAuth} />
      ) : (
        <SignUpInputs auth={auth} setAuth={setAuth} />
      )}
    </div>
  );
}
