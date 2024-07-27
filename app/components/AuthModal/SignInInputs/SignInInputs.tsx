import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema, loginType } from '@/app/types/authentication/auth.types';
import { onSignIn } from '@/app/utils/auth.utils';

export default function SignInInputs() {
  const { register, handleSubmit } = useForm<loginType>({
    resolver: yupResolver(logInSchema),
  });
  return (
    <form
      className="flex items-center justify-center flex-col gap-5 w-full"
      onSubmit={handleSubmit(onSignIn)}
    >
      <div className="w-full flex items-start justify-center flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="h-[35px] rounded-lg w-full"
          {...register('email')}
        />
      </div>
      <div className="w-full flex items-start justify-center flex-col">
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          className="h-[35px] rounded-lg w-full"
          {...register('password')}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
