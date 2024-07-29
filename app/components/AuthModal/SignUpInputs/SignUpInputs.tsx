import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  changeAuthButton,
  SignUpSchema,
  signUpType,
} from '@/app/types/authentication/auth.types';
import { onSignUp } from '@/app/utils/auth.utils';
import { error } from 'console';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function SignUpInputs({ auth, setAuth }: changeAuthButton) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: yupResolver(SignUpSchema),
  });
  return (
    <form
      className={`w-full flex flex-col gap-4 items-center justify-center flex-shrink-0`}
      onSubmit={handleSubmit(onSignUp)}
    >
      <div className="w-full flex items-start justify-center flex-col gap-1 relative">
        <label htmlFor="email" className="text-[13px]">
          Email
        </label>
        <input
          type="email"
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
      <div
        className={`w-full flex items-start justify-center flex-col gap-1 relative`}
      >
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
      <div
        className={`w-full flex items-start justify-center flex-col gap-1 relative`}
      >
        <label htmlFor="Confirm_password" className="text-[13px]">
          Confirm password
        </label>
        <input
          type="password"
          id="Confirm_password"
          className={`
            h-[42px] rounded-lg w-full border-[1px] text-[13px] px-3  ${
              !errors.confirm_password
                ? 'focus:outline-blue-600'
                : 'border-[2px] border-[#CD2C2C] outline-none'
            } `}
          {...register('confirm_password')}
          placeholder="***********"
        />
        {errors.confirm_password && (
          <p className="absolute text-red-400 right-0 bottom-[-17px] text-[11px]">
            {errors.confirm_password?.message}
          </p>
        )}
      </div>
      <div
        className={`w-full flex items-start justify-center flex-col gap-1 relative`}
      >
        <label htmlFor="name" className="text-[13px]">
          Name
        </label>
        <input
          type="text"
          id="name"
          className={`
            h-[42px] rounded-lg w-full border-[1px] text-[13px] px-3  ${
              !errors.name
                ? 'focus:outline-blue-600'
                : 'border-[2px] border-[#CD2C2C] outline-none'
            } `}
          {...register('name')}
          placeholder="John"
        />
        {errors.name && (
          <p className="absolute text-red-400 right-0 bottom-[-17px] text-[11px]">
            {errors.name?.message}
          </p>
        )}
      </div>
      <div
        className={`w-full flex items-start justify-center flex-col gap-1 relative`}
      >
        <label htmlFor="lastname" className="text-[13px]">
          Lastname
        </label>
        <input
          type="text"
          id="lastname"
          className={`
            h-[42px] rounded-lg w-full border-[1px] text-[13px] px-3  ${
              !errors.lastname
                ? 'focus:outline-blue-600'
                : 'border-[2px] border-[#CD2C2C] outline-none'
            } `}
          {...register('lastname')}
          placeholder="Doe"
        />
        {errors.lastname && (
          <p className="absolute text-red-400 right-0 bottom-[-17px] text-[11px]">
            {errors.lastname?.message}
          </p>
        )}
      </div>
      <SubmitButton auth={auth} setAuth={setAuth} />
    </form>
  );
}
