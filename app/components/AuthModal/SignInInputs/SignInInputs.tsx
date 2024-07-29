import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  changeAuthButton,
  logInSchema,
  loginType,
} from '@/app/types/authentication/auth.types';
import { onSignIn } from '@/app/utils/auth.utils';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function SignInInputs({ auth, setAuth }: changeAuthButton) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: yupResolver(logInSchema),
  });
  return (
    <form
      className="flex items-center justify-center flex-col gap-4 w-full flex-shrink-0"
      onSubmit={handleSubmit(onSignIn)}
    >
      <div className="w-full flex items-start justify-center flex-col gap-1 relative">
        <label htmlFor="email" className="text-[13px]">
          Email
        </label>
        <input
          type="text"
          id="email"
          className={`
            h-[42px] rounded-lg w-full border-[1px] text-[13px] px-3  ${
              !errors.email
                ? 'focus:outline-blue-600'
                : 'border-[2px] border-[#CD2C2C] outline-none'
            } `}
          placeholder="Example@example.com"
          {...register('email')}
        />
        {errors.email && (
          <p className="absolute text-red-400 right-0 bottom-[-17px] text-[11px]">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="w-full flex items-start justify-center flex-col gap-1 relative">
        <label htmlFor="password" className="text-[13px]">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`
            h-[42px] rounded-lg w-full border-[1px] text-[13px] px-3  ${
              !errors.password
                ? 'focus:outline-blue-600'
                : 'border-[2px] border-[#CD2C2C] outline-none'
            } `}
          {...register('password')}
          placeholder="***********"
        />
        {errors.password && (
          <p className="absolute text-red-400 right-0 bottom-[-17px] text-[11px]">
            {errors.password?.message}
          </p>
        )}
      </div>
      <SubmitButton auth={auth} setAuth={setAuth} />
    </form>
  );
}
