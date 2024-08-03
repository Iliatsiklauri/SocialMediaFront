'use client';
import React, { useContext, useState } from 'react';
import ChangeAuthButton from '../ChangeAuthButton/ChangeAuthButton';
import InputsForAuth from '../InputsForAuth/InputsForAuth';

export default function AuthModal() {
  const [auth, setAuth] = useState(false);
  return (
    <div
      className={`w-[340px] lg:w-[400px] flex-shrink-0 ${
        auth ? 'h-[380px]' : 'h-[590px] lg:h-[624px]'
      } bg-white rounded-2xl shadow-slate-400 shadow-sm p-6 lg:p-8 pt-24 lg:pt-28
       flex items-center justify-start gap-6 relative transition-all duration-150 ease-in-out flex-col `}
    >
      <ChangeAuthButton auth={auth} setAuth={setAuth} />
      <InputsForAuth auth={auth} setAuth={setAuth} />
    </div>
  );
}
