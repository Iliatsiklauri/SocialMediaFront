import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  SignUpSchema,
  signUpType,
} from '@/app/types/authentication/auth.types';
import { onSignUp } from '@/app/utils/auth.utils';

export default function SignUpInputs() {
  const { register, handleSubmit } = useForm<signUpType>({
    resolver: yupResolver(SignUpSchema),
  });
  return (
    <form
      className={`w-full flex flex-col gap-5 items-center justify-center `}
      onSubmit={handleSubmit(onSignUp)}
    >
      <div className="w-full flex items-start justify-center flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
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
      <div className={`w-full flex items-start justify-center flex-col`}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          className="h-[35px] rounded-lg w-full"
          {...register('name')}
        />
      </div>
      <div className={`w-full flex items-start justify-center flex-col`}>
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          id="lastname"
          className="h-[35px] rounded-lg w-full"
          {...register('lastname')}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
